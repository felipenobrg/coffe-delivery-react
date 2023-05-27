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
    font-size: 1.2rem;
    height: 1.5rem;
    font-family: 'Roboto', sans-serif;
    margin-left: auto;
  }
 
  span button {
    cursor: pointer;
    background: ${(props) => props.theme['yellow-light']};
    margin-top: 1.2rem;
    padding: 0.5rem;
    border: 0;
    border-radius: 9px;
    margin-right: 7rem;
  }

` 