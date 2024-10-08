import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 350px;
  background-color: #f8f9fa;
`;

export const UnitName = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const TreeItem = styled.div<{ level: number; selected?: boolean }>`
  padding-left: ${(props) => props.level * 20}px;
  margin: 5px 0;
  background-color: ${(props) => (props.selected ? 'var(--blue-900)' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  display: flex;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: ${(props) => (props.selected ? 'var(--blue-900)' : '#e7f5ff')};
    cursor: pointer;
    color: ${(props) => (props.selected ? '#fff' : '#000')};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
      max-width: 20px;
      max-height: 20px;
    }
  }
`;

export const Icon = styled.span`
  margin-right: 8px;
  display: inline-block;
`;

export const Label = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
