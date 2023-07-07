import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme["base-card"]};
  min-width: 108.5%;
  height: 12rem;
  border-radius: 9px;
  margin: 5rem 0 0 -2rem;

  .payments-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;
  }

  .p-payment {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .payment-div {
    margin-left: 2rem;
  }

  .p-payment-deliver {
    margin-left: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  .input-card {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["base-button"]};
    padding: 0.7rem;
    border-radius: 9px;
    transition: 0.4s ease;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
    }
  }

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};
  }

  label {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    .payments-container button {
      height: 3rem;
      margin-bottom: 1rem;
      font-size: 0.5rem;
    }

    .payments-container button svg {
      width: 2rem;
    }
  }

  user-select: none;
`;
