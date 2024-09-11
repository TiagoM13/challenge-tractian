import React from "react";
import { Companie } from "../../interfaces/companie"
import { FilterContainer } from "./styled";

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
          Sensor de Energia
        </button>
        <button
          type="button"
          onClick={() => handleOnClick('critico')}
          className={activeFilter === 'critico' ? 'active' : ''}
        >
          Crítico
        </button>
      </div>
    </FilterContainer>
  )
}