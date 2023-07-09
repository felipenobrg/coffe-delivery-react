import styled from "styled-components";

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  border-radius: 9px;
  background: ${(props) => props.theme["base-card"]};
  font-family: "Roboto", sans-serif;
  min-width: 30%;
  border-radius: 8px 36px 8px 36px;

  h2 {
    margin-top: -3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15rem;
    flex-wrap: wrap;

    h2 {
      margin-left: 2rem;
    }
  }
`;

export const AmountItens = styled.div`
  margin-top: 1rem;
`;

export const TotalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;

  h4 {
    font-size: 1.3rem;
  }
`;

export const BoldPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;


export const ConfirmOrder = styled.button`
  cursor: pointer;
  min-width: 80%;
  padding: 1rem;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow"]};
  border: none;
  border-radius: 9px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 1rem;

  &&:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &&:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
