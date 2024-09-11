import React, { useState } from "react";

import { Asset } from "../../interfaces/asset";
import { Companie } from "../../interfaces/companie";
import { Location } from "../../interfaces/location";

import { getAllAssets, getAllCompanies } from "../../services/services";

import { DetailsPanel } from "../../components/details-panel";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

import { Card, Container, Content } from "./styled";
import { Filters } from "../../components/filters";

export const AssetView = () => {
  const [selectedCompanie, setSelectedCompanie] = useState<Companie | null>(null);
  const [companies, setCompanies] = React.useState<Companie[]>([])
  const [locations, setLocations] = React.useState<Location[]>([])
  const [assets, setAssets] = React.useState<Asset[]>([])

  const handleCompanieChange = (companie: Companie) => {
    setSelectedCompanie(companie);

    handleGetAssetSelected(companie.id)
  }

  const handleGetAssetSelected = async (id: string) => {
    const response = await getAllAssets(id)

    setAssets(response.assets)
    setLocations(response.locations)
  }

  React.useEffect(() => {
    (async () => {
      const response = await getAllCompanies();
      setCompanies(response);
    })()
  }, [])

  return (
    <Container>
      <Header companies={companies} selectedCompanie={selectedCompanie} handleCompanieChange={handleCompanieChange} />
      <Card>
        <Filters companie={selectedCompanie} />
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