import styled from "styled-components";

export const TypeCoffe = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-top: 1rem;
`;

export const TypeImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CoffeImg = styled.img`
  margin-top: 1rem;
  max-width: 4rem;
`;

export const Price = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-weight: bold;
  font-size: 1.1rem;
`;

export const NameCoffee = styled.p`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.1rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;

  @media (max-width: 600px) {
    margin-top: 0.1rem;
  }
`;

export const IncreaseDecrease = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.4rem;
  border: none;
  user-select: none;

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

export const Remove = styled.div`
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
  user-select: none;

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["base-hover"]};;
  }
`;
