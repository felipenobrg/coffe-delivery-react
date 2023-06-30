import styled from "styled-components";

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  border-radius: 9px;
  background: ${(props) => props.theme["base-input"]};
  font-family: "Roboto", sans-serif;
  width: 35rem;
  border-radius: 8px 36px 8px 36px;

  h2 {
    margin-top: -3rem;
  }
    
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
  margin: 0 auto;
  margin-bottom: 1rem;

  &&:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["yellow-dark"]};;
  }
`;


export const AmountItens = styled.div`
   margin-left: 1rem;
`
