import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Baloo 2', sans-serif;  
  min-width: 90%;

  h2 {
    margin-left: 2rem;
  }
`
  export const MainRow = styled.div`
    display: flex;
`
  export const AdressContainer = styled.div`
    min-width: 50rem;
    height: 22rem;
    padding: 2rem;
    margin-left: 3rem;
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme['base-input']};
    border-radius: 9px;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    color: ${(props) => props.theme['base-text']};
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
  `

  export const SelectedCoffeContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    min-width: 25%;
    height: 32rem;
    margin-left: 2rem;
    border-radius: 9px;
    background: ${(props) => props.theme['base-input']};
    font-family: 'Roboto', sans-serif;

  button {
    cursor: pointer;
    min-width: 80%;
    padding: 0.8rem;
    color: ${(props) => props.theme['white']};;
    background: ${(props) => props.theme['yellow']};
    border: none;
    border-radius: 9px;
    font-weight: bold;
  }

  .amount-items {
    margin-top: 15rem;
    margin-right: 57%;
    background: ${(props) => props.theme['base-input']};
  }
`
  export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme['base-input']};
    width: 54rem;
    height: 11rem;
    margin-left: 3rem;
    border-radius: 9px;
    margin-top: -5rem;

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
    color: ${(props) => props.theme['base-text']};
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
    background: ${(props) => props.theme['base-button']};
    padding: 1rem;
    border-radius: 9px;
    border: none;
    margin-right: 0.3rem;
    cursor: pointer;
  }

  .button-container button:hover {
    background: ${(props) => props.theme['purple-light']};
    transition: 0.3 ease;
  }
`