import styled from "styled-components";

export const ConfirmedOrderContainer = styled.section`
   margin-top: 3rem;
   margin-left: 4rem;
   font-family: 'Roboto', sans-serif;

  .orderIsConfirmed p {
     margin-top: -1rem;
  }

  .orderIsConfirmed h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const AboutOrder = styled.div`
   display: flex;
   margin-top: 3rem;
   justify-content: space-between;
   align-items: center;

   .information-order-container {
    width: 30rem;
    border: 1px solid ${(props) => props.theme['purple']};
    border-radius: 0 3rem;
    padding: 2rem;
   }

   .information-order {
      display: flex;
   }

   svg {
      margin-top: 1.4rem;
      margin-right: 1rem;
      background: ${(props) => props.theme['purple']};
      padding: 0.3rem;
      border-radius: 999px;
   }

   .timer-order-container {
      flex-direction: column;
   }
 
   .timer-order-container svg {
      background: ${(props) => props.theme['yellow']};
   }

   .timer-order {
      display: flex;
   }

   .payment-order {
      display: flex;
   }

   .payment-order svg {
      background: ${(props) => props.theme['yellow-dark']};
   }
`