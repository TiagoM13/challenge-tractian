import styled from "styled-components";

export const ContentSearch = styled.div`
  padding: 0 1rem 0.25rem 0;
  border-bottom: 1px solid #D0D7DE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  input {
    width: 100%;
    border: 0;
    padding: 0.5rem 1rem;
    outline: none;

    &::placeholder {
      color: #C1C9D2;
    }
  }
`
