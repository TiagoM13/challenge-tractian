import { useState } from "react";

import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"

import { Container, Content } from "./styled"
import DetailsPanel from "../components/details-panel";

export const Page = () => {
  const [selectedUnit, setSelectedUnit] = useState('Apex Unit');

  return (
    <Container>
      <Header selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
      <Content>
        <Sidebar selectedUnit={selectedUnit} />
        <DetailsPanel />
      </Content>
    </Container>
  )
}