import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { Asset } from "../../interfaces/asset";
import { Companie } from "../../interfaces/companie";
import { Location } from "../../interfaces/location";

import { getAllAssets, getAllCompanies } from "../../services/services";

import { DetailsPanel } from "../../components/details-panel";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { Filters } from "../../components/filters";

import { Card, Container, Content } from "./styled";

export const AssetView = () => {
  const [selectedCompanie, setSelectedCompanie] = useState<Companie | null>(null);
  const [companies, setCompanies] = React.useState<Companie[]>([])
  const [locations, setLocations] = React.useState<Location[]>([])
  const [assets, setAssets] = React.useState<Asset[]>([])
  const [originalAssets, setOriginalAssets] = useState<Asset[]>([]);
  const [originalLocations, setOriginalLocations] = useState<Location[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const location = useLocation();

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

    const relevantLocations = getRelevantLocations(filteredAssetIds as Set<string>);

    const allRelevantLocations = Array.from(new Set([...relevantLocations.map(loc => loc.id), ...filterLocations.map(loc => loc.id)]));

    setAssets(filterAssets);
    setLocations(originalLocations.filter(location => allRelevantLocations.includes(location.id)));
  }, [getRelevantLocations, originalAssets, originalLocations]);

  const applyFilters = useCallback(() => {
    if (activeFilter) {
      let filteredAssets = [...originalAssets];

      if (activeFilter === 'energia') {
        filteredAssets = filteredAssets.filter(asset => asset.sensorType === 'energy');
      } else if (activeFilter === 'critico') {
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

  const handleGetAssetSelected = React.useCallback(async (id: string) => {
    const response = await getAllAssets(id)
    setAssets(response.assets)
    setLocations(response.locations)
    setOriginalAssets(response.assets);
    setOriginalLocations(response.locations);
  }, [])

  const handleCompanieChange = (companie: Companie) => {
    setSelectedCompanie(companie);
    handleGetAssetSelected(companie.id)
  }

  React.useEffect(() => {
    (async () => {
      const response = await getAllCompanies();
      setCompanies(response);

      if (response.length > 0) {
        const firstCompany: Companie = response[0];
        setSelectedCompanie(firstCompany);
        handleGetAssetSelected(firstCompany.id)
      }
    })()
  }, [handleGetAssetSelected])

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search") || "";

    if (query) {
      handleFilter(query);
    } else {
      setAssets(originalAssets);
      setLocations(originalLocations);
    }
  }, [handleFilter, originalAssets, originalLocations, location.search])

  React.useEffect(() => {
    applyFilters();
  }, [activeFilter, applyFilters]);

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
  )
}