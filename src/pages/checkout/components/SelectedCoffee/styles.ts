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

  button {
    cursor: pointer;
    min-width: 80%;
    padding: 0.8rem;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow"]};
    border: none;
    border-radius: 9px;
    font-weight: bold;
  }

  .amount-items {
    margin-top: 15rem;
    margin-right: 57%;
    background: ${(props) => props.theme["base-input"]};
  }
`;
