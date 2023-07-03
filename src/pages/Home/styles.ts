import styled from "styled-components";
import introBackgroundImg from '../../assets/Background.png'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${() => `url(${introBackgroundImg})`};
  background-size: cover;

  width: 100%;

  margin-top: 3rem;

  img {
    width: 30%;
    margin-left: 55rem;
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

  @media (max-width: 600px) {
    margin: 1rem 0 0 2rem;

    img {
      width: 18rem;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 4rem;
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
  }

  .coffe-icon {
    background: ${(props) => props.theme['purple']};
    margin-left: 1.8rem;
  }

  @media (max-width: 600px) {
    display: flex;

    .shoppingCart-icon,
    .package-icon,
    .timer-icon,
    .coffe-icon {
      display: flex; 
    }

    .package-icon {
      margin-left: 0.1rem;
    }

    .coffe-icon {
      margin-left: 0.1rem;
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
