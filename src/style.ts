import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.4rem;
  margin-left: 4rem;

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
    padding: 0.5rem;
    border: 0;
    border-radius: 9px;
    margin: 1rem 7rem 0 0;
  }

  @media (max-width: 768px) {
    margin: 2rem;
    flex-direction: column;
  

  span button {
    margin-top: 2rem;
    margin-left: 17rem;
  }

  p {
    display: none;
  }
}
`

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

  @media (max-width: 768px) {
    margin-left: 2rem;

    img {
      width: 100%;
      margin-bottom: 1.5rem;
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
