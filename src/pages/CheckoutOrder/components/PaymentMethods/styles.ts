import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme["base-input"]};
  min-width: 108.5%;
  height: 12rem;
  border-radius: 9px;
  margin: 5rem 0 0 -2rem;
 

  .p-payment {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .payment-div {
    margin-left: 2rem;
  }

  .p-payment-deliver {
    margin-left: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;
  }

  .button-container button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: ${(props) => props.theme["base-button"]};
    padding: 1rem;
    border-radius: 9px;
    border: none;
    margin: -1rem 0.3rem 0 0;
    cursor: pointer;
  }

  .button-container button:hover {
    background: ${(props) => props.theme["purple-light"]};
    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    .button-container button {
      height: 3rem;
      margin-bottom: 1rem;
      font-size: 0.5rem;
    }

    .button-container button svg {
      width: 2rem;
    }
  }
`;
