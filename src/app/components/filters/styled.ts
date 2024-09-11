import styled from "styled-components";

interface Props {
  activeFilter: string | null;
}

export const FilterContainer = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    color: #24292F;

    span {
      color: #77818C;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .content-filters {
    display: flex;
    gap: 10px;

    button {
      border: 1px solid #D8DFE6;
      border-radius: 5px;
      background-color: #fff;
      color:  #77818C;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 14px;

      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        filter: brightness(0.95);
      }

      &.active {
        background-color: var(--blue-500);
        color: #fff;
      }
    }
  }
`;