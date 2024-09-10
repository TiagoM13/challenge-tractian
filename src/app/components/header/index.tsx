import { HeaderContainer, UnitButton, UnitsContainer } from "./styled.ts"

import LogoTractian from '../../../assets/LOGO TRACTIAN.png';

interface HeaderProps {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
}

export const Header = ({ selectedUnit, setSelectedUnit }: HeaderProps) => {
  const units: string[] = ['Apex Unit', 'Tobias Unit', 'Jaguar Unit'];

  return (
    <HeaderContainer>
      <img src={LogoTractian} alt="Logo Tractian" loading="lazy" />

      <UnitsContainer>
        {units.map((unit) => (
          <UnitButton
            key={unit}
            isSelected={unit === selectedUnit}
            onClick={() => setSelectedUnit(unit)}
          >
            {unit}
          </UnitButton>
        ))}
      </UnitsContainer>
    </HeaderContainer>
  )
}