import { HeaderContainer, UnitButton, UnitsContainer } from "./styled.ts"

import LogoTractian from '../../../assets/LOGO TRACTIAN.png';
import IconGold from "../../../assets/gold.png"

import { Companie } from "../../interfaces/companie.ts";

interface HeaderProps {
  companies?: Companie[];
  selectedCompanie: Companie | null;
  handleCompanieChange: (companie: Companie) => void;
}

export const Header = ({ companies, selectedCompanie, handleCompanieChange }: HeaderProps) => {
  return (
    <HeaderContainer>
      <img src={LogoTractian} alt="Logo Tractian" loading="lazy" />

      <UnitsContainer>
        {companies?.map((companie) => (
          <UnitButton
            key={companie.name}
            isSelected={companie === selectedCompanie}
            onClick={() => handleCompanieChange(companie)}
          >
            <img src={IconGold} alt="Icon Gold" loading="lazy" />
            <span>
              {companie.name} Unit
            </span>
          </UnitButton>
        ))}
      </UnitsContainer>
    </HeaderContainer>
  )
}