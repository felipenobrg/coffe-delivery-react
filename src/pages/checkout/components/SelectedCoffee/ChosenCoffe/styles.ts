import styled from "styled-components";

export const TypeCoffe = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-left: 1rem;
  margin-top: 2rem;
`;

export const TypeImage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const CoffeImg = styled.img`
  margin-left: 0.5rem;
  width: 20%;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-left: 5rem;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.1rem;
`;

export const NameCoffee = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.1rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: -3.2rem 0 0 7.7rem;
`;

export const IncreaseDecrease = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.4rem;
  border: none;

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["base-hover"]};;
  }
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

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["base-hover"]};;
  }
`;
