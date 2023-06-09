import styled from "styled-components";
import introBackgroundImg from '../../assets/Background.png'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 5rem 3rem 4rem;
  background: ${() => `url(${introBackgroundImg})`} no-repeat center center;
  background-size: cover;
  max-width: 100%;

  img {
    width: 30%;
    margin-left: 50rem;
    margin-top: -18rem;
  }

  .about-coffee-section {
    display: flex;
    flex-direction: column;     
    font-family: 'Roboto', sans-serif;
    margin-left: 4rem;
  }

  .about-coffee-section h1 {
    font-family: 'Baloo 2';
    font-size: 2.8rem;
  }

  .about-coffee-section p {
    margin-top: -1.5rem;
  }

  @media (max-width: 768px) {
    align-items: center;

    img {
      width: 18rem;
      margin: 0 auto;
      margin-top: 2rem;
    }

    .about-coffee-section {
      line-height: 1.1;
      width: 20rem;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 4rem;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
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
  }

  .coffe-icon {
    background: ${(props) => props.theme['purple']};
    margin-left: 1.8rem;
  }

  @media (max-width: 768px) {
    margin: auto;
    align-items: center;
    line-height: 1.1rem;
    flex-wrap: wrap;
    gap: 0.3rem;
   
    .shoppingCart-icon,
    .package-icon,
    .timer-icon,
    .coffe-icon {
      display: flex;
    }

    .package-icon {
      margin-left: 0.2rem;
    }

    .coffe-icon {
      margin-left: 0.3rem;
    }
  }
`

export const OurCoffes = styled.h1`
   margin-left: 5rem;
   margin-bottom: 2rem;
  
   font-family: 'Baloo 2', sans-serif;

   @media (max-width: 768px) {
    margin-top: -1rem;
   }
`

export const CoffeStyle = styled.div`
  display: flex;
`
