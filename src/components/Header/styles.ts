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