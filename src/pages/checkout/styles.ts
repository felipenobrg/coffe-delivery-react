import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Baloo 2", sans-serif;

  h2 {
    margin-left: 2rem;
  }
`;
export const MainRow = styled.div`
  display: flex;
`;
export const AdressContainer = styled.div`
  width: 50rem;
  height: 22rem;
  padding: 2rem;
  margin-left: 3rem;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme["base-input"]};
  border-radius: 9px;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 2rem;
  }

  input {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    border: 0;
    width: 90%;
    border-radius: 9px;
  }

  .number {
    width: 30%;
  }

  .cep {
    width: 40%;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .row2 {
    display: flex;
    flex-direction: row;
  }

  .uf {
    width: 10%;
  }
`;
