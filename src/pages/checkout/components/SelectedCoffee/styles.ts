import styled from "styled-components";

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25%;
  height: 32rem;
  margin-left: 2rem;
  border-radius: 9px;
  background: ${(props) => props.theme["base-input"]};
  font-family: "Roboto", sans-serif;

  h2 {
    margin-top: -2rem;
  }

  .amount-items {
    margin-top: 15rem;
    margin-right: 57%;
    background: ${(props) => props.theme["base-input"]};
  }
`;

export const TypeCoffe = styled.div`
  img {
    width: 30%;
    height: 50%;
  }

  .type-image {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const IncreaseDecrease = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.4rem;
  border: none;
`;

export const AmountCoffee = styled.p`
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  padding: 0.46rem;
`;

export const Remove = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
  border: none;
  padding: 0.5rem;
  margin-left: 1rem;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
`;

export const ConfirmOrder = styled.button`
  cursor: pointer;
  min-width: 80%;
  padding: 0.8rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow"]};
  border: none;
  border-radius: 9px;
  font-weight: bold;
`;
