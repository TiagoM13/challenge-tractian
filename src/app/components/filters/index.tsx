import React from "react";
import { Lightning, WarningCircle } from "@phosphor-icons/react";

import { Companie } from "@/app/interfaces/companie"

import { FilterContainer } from "./styled";

interface FilterProps {
  companie: Companie | null;
  onFilterChange: (filter: string | null) => void;
}

export const Filters = ({ companie, onFilterChange }: FilterProps) => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const handleOnClick = (filter: string) => {
    const newFilter = activeFilter === filter ? null : filter;
    setActiveFilter(newFilter);
    onFilterChange(newFilter);
  }

  return (
    <FilterContainer activeFilter={activeFilter}>
      <h2>
        Ativos <span>/ {companie?.name} Unit</span>
      </h2>

      <div className="content-filters">
        <button
          type="button"
          onClick={() => handleOnClick("energy")}
          className={activeFilter === 'energy' ? 'active' : ''}
        >
          <Lightning size={16} weight="bold" color={activeFilter === 'energy' ? '#fff' : "#2188FF"} />
          Sensor de Energia
        </button>
        <button
          type="button"
          onClick={() => handleOnClick('alert')}
          className={activeFilter === 'alert' ? 'active' : ''}
        >
          <WarningCircle size={16} weight="bold" color={activeFilter === 'alert' ? '#fff' : "#2188FF"} />
          Crítico
        </button>
      </div>
    </FilterContainer>
  )
}