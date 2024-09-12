import { DetailsPanel } from "@/app/components/details-panel";
import { Header } from "@/app/components/header";
import { Sidebar } from "@/app/components/sidebar";
import { Filters } from "@/app/components/filters";

import { useAssets } from "@/app/hooks/useAssets";

import { Card, Container, Content } from "./styled";

export const AssetView = () => {
  const {
    assets,
    companies,
    locations,
    selectedCompanie,
    setActiveFilter,
    handleCompanieChange
  } = useAssets()

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
