import React, { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Asset } from "@/app/interfaces/asset";
import { Companie } from "@/app/interfaces/companie";
import { Location } from "@/app/interfaces/location";

import { getAllAssets, getAllCompanies } from "@/app/services/services";

import { DetailsPanel } from "@/app/components/details-panel";
import { Header } from "@/app/components/header";
import { Sidebar } from "@/app/components/sidebar";
import { Filters } from "@/app/components/filters";

import { Card, Container, Content } from "./styled";

export const AssetView = () => {
  const [selectedCompanie, setSelectedCompanie] = useState<Companie | null>(null);
  const [companies, setCompanies] = useState<Companie[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [originalAssets, setOriginalAssets] = useState<Asset[]>([]);
  const [originalLocations, setOriginalLocations] = useState<Location[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = React.useMemo(() => new URLSearchParams(location.search), [location.search]);

  const getRelevantLocations = React.useCallback((locationIds: Set<string>) => {
    const relevantLocations = new Set<string>();
    const findParents = (locationId: string) => {
      const loc = originalLocations.find(loc => loc.id === locationId);
      if (loc) {
        relevantLocations.add(loc.id);
        if (loc.parentId) {
          findParents(loc.parentId);
        }
      }
    };

    locationIds.forEach(id => findParents(id));

    return originalLocations.filter(location => relevantLocations.has(location.id));
  }, [originalLocations])

  const handleFilter = useCallback((query: string) => {
    const searchQuery = query.toLowerCase();

    const filterAssets = originalAssets.filter(asset =>
      asset.name.toLowerCase().includes(searchQuery)
    );

    const filterLocations = originalLocations.filter(location =>
      location.name.toLowerCase().includes(searchQuery)
    );

    const filteredAssetIds = new Set(filterAssets.map(asset => asset.locationId));
    const filteredLocationIds = new Set(filterLocations.map(location => location.id));

    const relevantLocations = getRelevantLocations(filteredAssetIds as Set<string>);

    const allRelevantLocations = Array.from(new Set([...relevantLocations.map(loc => loc.id), ...filteredLocationIds]));

    setAssets(filterAssets);
    setLocations(originalLocations.filter(location => allRelevantLocations.includes(location.id)));
  }, [getRelevantLocations, originalAssets, originalLocations]);

  const applyFilters = useCallback(() => {
    if (activeFilter) {
      let filteredAssets = [...originalAssets];

      if (activeFilter === 'energy') {
        filteredAssets = filteredAssets.filter(asset => asset.sensorType === 'energy');
      } else if (activeFilter === 'alert') {
        filteredAssets = filteredAssets.filter(asset => asset.sensorType !== null && asset.status === 'alert');
      }

      const filteredAssetIds = new Set(filteredAssets.map(asset => asset.locationId));
      const relevantLocations = getRelevantLocations(filteredAssetIds as Set<string>);

      setAssets(filteredAssets);
      setLocations(originalLocations.filter(location => relevantLocations.some(loc => loc.id === location.id)));
    } else {
      setAssets(originalAssets);
      setLocations(originalLocations);
    }
  }, [activeFilter, getRelevantLocations, originalAssets, originalLocations]);

  const handleGetAssetSelected = useCallback(async (id: string) => {
    const response = await getAllAssets(id);
    setAssets(response.assets);
    setLocations(response.locations);
    setOriginalAssets(response.assets);
    setOriginalLocations(response.locations);
  }, []);

  const handleCompanieChange = useCallback((companie: Companie) => {
    setSelectedCompanie(companie);
    handleGetAssetSelected(companie.id);

    searchParams.set("companie", companie.id);
    navigate({ search: searchParams.toString() });
  }, [handleGetAssetSelected, navigate, searchParams]);

  useEffect(() => {
    (async () => {
      const response = await getAllCompanies();
      setCompanies(response);

      const companieId = searchParams.get("companie");

      if (response.length > 0) {
        if (companieId) {
          const selected = response.find((companie: Companie) => companie.id === companieId);
          if (selected) {
            setSelectedCompanie(selected);
            handleGetAssetSelected(selected.id);
          }
        } else {
          const firstCompanie = response[0];
          setSelectedCompanie(firstCompanie);
          handleGetAssetSelected(firstCompanie.id);

          searchParams.set("companie", firstCompanie.id);
          navigate({ search: searchParams.toString() });
        }
      }
    })();
  }, [handleGetAssetSelected, location.search, navigate, searchParams]);

  useEffect(() => {
    const query = searchParams.get("search") || "";
    handleFilter(query);
  }, [handleFilter, location.search, searchParams]);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  return (
    <Container>
      <Header companies={companies} selectedCompanie={selectedCompanie} handleCompanieChange={handleCompanieChange} />
      <Card>
        <Filters companie={selectedCompanie} onFilterChange={setActiveFilter} />
        <Content>
          <div className="card-content">
            <Sidebar locations={locations} assets={assets} />
          </div>
          <div className="card-content w-full">
            <DetailsPanel />
          </div>
        </Content>
      </Card>
    </Container>
  );
};
