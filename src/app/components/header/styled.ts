import styled from 'styled-components';

interface HeaderProps {
  isSelected: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--bg-black-900);
  color: white;
`;

export const UnitsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const UnitButton = styled.button<HeaderProps>`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: ${(props) => (props.isSelected ? 'var(--blue-500)' : 'var(--blue-900)')};
  color: ${(props) => (props.isSelected ? 'white' : '#ccc')};
  border: 0;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 16px;
    max-height: 16px;
  }
`;
