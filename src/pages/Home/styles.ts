import styled from "styled-components";
export const SectionContainer = styled.section`
  margin: 3rem 0 0 4.5rem;

  img {
    width: 40%;
    margin-left: 40rem;
    margin-top: -18rem;
  }

  .about-coffee-section {
    display: flex;
    flex-direction: column;     
    font-family: 'Roboto', sans-serif;
  }

  .about-coffee-section h1 {
    font-family: 'Baloo 2';
    font-size: 2.8rem;
  }

  .about-coffee-section p {
    margin-top: -1.5rem;
  }

  @media (max-width: 600px) {
    margin-left: 2rem;

    img {
      width: 20rem;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`

export const IconsContainer = styled.div`
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
  .shoppingCart-icon,
  .package-icon,
  .timer-icon,
  .coffe-icon {
    background-color: transparent;
    padding: 0.15rem;
    border-radius: 999px;
    margin-right: 7px;
  }

  .shoppingCart-icon {
    background: ${(props) => props.theme['yellow-dark']};
  }

  .package-icon {
    background: ${(props) => props.theme['base-text']};
    margin-left: 2rem;
  }

  .timer-icon {
    background: ${(props) => props.theme['yellow']};
    margin-top: 1rem;
  }

  .coffe-icon {
    background: ${(props) => props.theme['purple']};
    margin-left: 1.8rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .shoppingCart-icon,
    .package-icon,
    .timer-icon,
    .coffe-icon {
      display: flex;
      
    }
    
  }
`

export const OurCoffes = styled.h1`
   margin-left: 4.3rem;
   font-family: 'Baloo 2', sans-serif;
`

export const CoffeStyle = styled.div`
  display: flex;
`
