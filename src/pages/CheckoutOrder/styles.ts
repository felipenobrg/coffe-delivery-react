import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Baloo 2", sans-serif;
`;

export const MainRow = styled.div`
  display: flex;

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
  }
`;
export const AdressContainer = styled.div`
  min-width: 40%;
  height: 22rem;
  padding: 2rem;
  margin-left: 3rem;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 9px;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 2rem;
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

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const CompleteYourOrder = styled.h2`
  margin-left: 2rem;
`;
