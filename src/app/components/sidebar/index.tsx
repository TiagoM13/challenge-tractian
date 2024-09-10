import { useEffect } from 'react';

import { SidebarContainer } from './styled';

interface SideBarProps {
  selectedUnit: string;
}

export const Sidebar = ({ selectedUnit }: SideBarProps) => {
  useEffect(() => {
    console.log(`Fetching assets for ${selectedUnit}`);
  }, [selectedUnit]);

  return (
    <SidebarContainer>
      <h2>Ativos / {selectedUnit}</h2>
    </SidebarContainer>
  );
};
