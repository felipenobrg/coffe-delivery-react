import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme["base-input"]};
  max-width: 54rem;
  height: 11rem;
  margin-left: 3rem;
  border-radius: 9px;
  margin-bottom: 1rem;
  margin-top: -21rem;

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
    margin-right: 0.3rem;
    cursor: pointer;
  }

  .button-container button:hover {
    background: ${(props) => props.theme["purple-light"]};
    transition: 0.3 ease;
  }
`;
