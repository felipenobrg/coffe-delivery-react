import styled from "styled-components";

export const CoffesAvailableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 20rem;
  border-radius: 9px;
  margin-left: 5rem;
  margin-top: 1.5rem;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 50%;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    padding: 0.2rem;
    border-radius: 8px;
    color:  ${(props) => props.theme['yellow-dark']};;
    background: ${(props) => props.theme['yellow-light']};
   }

  h2 {
    font-family: 'Baloo 2';
    margin-top: -0.2rem;
    font-size: 1.2rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.8rem;
    margin-top: -0.2rem;
    text-align: center;
  }

  .price {
    font-family: 'Baloo 2';
    font-size: 1.3rem;
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

`