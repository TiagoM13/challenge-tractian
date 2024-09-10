import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Card = styled.div`
  margin: 8px;
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;

  border: 1px solid #ccc;
  border-radius: 5px;

  height: calc(100vh - 2rem); 
`;

export const Content = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex: 1;

  
  .card-content {
    padding: 0.5rem;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  .card-content.w-full {
    width: 100%;
  }
`;
