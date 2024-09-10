import styled from 'styled-components';

interface HeaderProps {
  isSelected: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: white;
`;

export const UnitsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const UnitButton = styled.button<HeaderProps>`
  background-color: ${(props) => (props.isSelected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.isSelected ? 'white' : '#ccc')};
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
