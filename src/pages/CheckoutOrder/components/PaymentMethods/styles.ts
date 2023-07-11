import styled from "styled-components";

export const PaymentMethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    gap: 0.4rem;
    background: ${(props) => props.theme["base-button"]};
    padding: 0.7rem;
    border-radius: 9px;
    transition: 0.4s ease;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;

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
    border: 1px solid ${(props) => props.theme["purple"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};;
  }

  label {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    .payments-container {
      height: 3rem;
      margin-bottom: 1rem;
      font-size: 0.5rem;
    }

    .payments-container svg {
      width: 2rem;
    }

    .input-card {
      height: 1rem;
      font-size: 0.7rem;
    }
  }

  user-select: none;
`;

export const ContentContainer = styled.div`
   
`
