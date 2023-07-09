import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  font-family: "Baloo 2", sans-serif;

  .form input {
    padding: 1rem;
  }

  .number {
    width: 40%;
    margin-right: 1rem;
  }

  .city {
    width: 36.5%;
  }

  .neighborhood {
    width: 40%;
    margin-right: 1rem;
  }

  .cep {
    width: 40%;
  }

  .complement {
    width: 53%;
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
    margin-left: 1rem;
  }  
`;

export const MainRow = styled.div`
  display: flex;

  @media (max-width: 768px) {
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
  }

 

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const CompleteYourOrder = styled.h2`
  margin-left: 2rem;
`;
