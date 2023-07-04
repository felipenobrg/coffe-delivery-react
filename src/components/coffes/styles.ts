import styled from "styled-components";

export const CoffesAvailableContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  width: 20%;
  border-radius: 6px 36px 6px 36px;
  margin-left: 3.9rem;
  margin-top: 3rem;
  background: ${(props) => props.theme["base-card"]};

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;
    min-width: 100%;
    margin-top: 5rem;
  }
`;

export const ImgCoffe = styled.img`
  min-width: 50%;
  margin-top: -2rem;
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  margin-top: -0.2rem;
  font-size: 1.2rem;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;

  span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const CoffeAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
`;

export const ButtonCoffe = styled.button`
  padding: 0.6rem;
  border: none;
  background: ${(props) => props.theme["base-button"]};
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const CoffeAmountSpan = styled.span`
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme["base-button"]};
  padding: 0.4rem;
`;

export const Price = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme["black"]};
  background: ${(props) => props.theme["base-card"]};
  margin-right: 0.8rem;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    margin-right: 0.16rem;
  }
`;

export const ShoppingCartContainer = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 0.3rem;
  padding: 0.5rem;
  border-radius: 3px;
  background: ${(props) => props.theme["purple-dark"]};

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["purple"]};
  }
`;
