import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0.4rem;
  margin-left: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 1rem;
    height: 1.5rem;
    font-family: 'Roboto', sans-serif;
    margin-left: auto;
  }
 
  span button {
    cursor: pointer;
    background: ${(props) => props.theme['yellow-light']};
    margin-top: 1rem;
    padding: 0.5rem;
    border: 0;
    border-radius: 9px;
    margin-right: 7rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    flex-direction: column;

    span button {
      margin-right: 0;
      margin-top: 0.5rem;
    }
  }
`

export const SectionContainer = styled.section`
  margin-top: 2rem;
  margin-left: 4.5rem;

  img {
    width: 38%;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: -14rem;
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

  @media (max-width: 768px) {
    margin-left: 2rem;

    img {
      width: 100%;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 1.5rem;
    }
  }
`

export const IconsContainer = styled.div`
  margin-top: -5rem;

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
  }

  .timer-icon {
    background: ${(props) => props.theme['yellow']};
    margin-top: 1rem;
  }

  .coffe-icon {
    background: ${(props) => props.theme['purple']};
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;

    .shoppingCart-icon,
    .package-icon,
    .timer-icon,
    .coffe-icon {
      margin-bottom: 0.5rem;
    }
  }
`
