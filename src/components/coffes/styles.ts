import styled from "styled-components";

export const CoffesAvailableContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 20%rem;
  width: 20%;
  border-radius: 9px;
  margin-left: 3.9rem;
  margin-top: 1.5rem;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 50%;
  }
  
  button {    
    padding: 0.3rem;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
  }

  .shopping-cart {
    margin-left: 0.3rem;
    padding: 0.3rem;
    border-radius: 3px;
    background: ${(props) => props.theme['purple-dark']};
  }

  .coffe-amount {
    margin-bottom: 1rem;
  }
`

export const Title = styled.div`
    font-family: 'Baloo 2';
    margin-top: -0.2rem;
    font-size: 1.2rem;
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;

  span {
    background: ${( props ) => props.theme["yellow-light"]};
    color: ${( props ) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Description = styled.div`
    color: ${(props) => props.theme['base-label']};
    font-size: 0.9rem;
    margin-top: 0.5rem;
    text-align: center;
`

export const Price = styled.div`
    font-family: 'Baloo 2';
    font-size: 1.3rem;
    color: ${(props) => props.theme['black']};
`