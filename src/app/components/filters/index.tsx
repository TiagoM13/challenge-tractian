import React from "react";
import { Companie } from "../../interfaces/companie"
import { FilterContainer } from "./styled";
import { Lightning, WarningCircle } from "@phosphor-icons/react";

interface FilterProps {
  companie: Companie | null;
}

export const Filters = ({ companie }: FilterProps) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const handleOnClick = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <FilterContainer activeFilter={activeFilter}>
      <h2>
        Ativos <span>/ {companie?.name} Unit</span>
      </h2>

      <div className="content-filters">
        <button
          type="button"
          onClick={() => handleOnClick("energia")}
          className={activeFilter === 'energia' ? 'active' : ''}
        >
          <Lightning size={16} weight="bold" color={activeFilter === 'energia' ? '#fff' : "#2188FF"} />
          Sensor de Energia
        </button>
        <button
          type="button"
          onClick={() => handleOnClick('critico')}
          className={activeFilter === 'critico' ? 'active' : ''}
        >
          <WarningCircle size={16} weight="bold" color={activeFilter === 'critico' ? '#fff' : "#2188FF"} />
          Crítico
        </button>
      </div>
    </FilterContainer>
  )
}