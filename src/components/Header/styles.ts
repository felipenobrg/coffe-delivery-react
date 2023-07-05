import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${(props) => props.theme["white"]};
  
  padding: 1rem;
  position: sticky;
  top: 0;
  position: 0;

  img {
    margin-left: 4.9rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};
    padding: 0.6rem;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    margin-left: auto;
  }

  span button {
    cursor: pointer;
    background: ${(props) => props.theme["yellow-light"]};
    padding: 0.6rem;
    border: 0;
    border-radius: 9px;
    margin-right: 4rem;
  }

  @media (max-width: 600px) {
     display: flex;
     align-items: center;
     justify-content: center;
     
     p {
      font-size: 0.9rem;
      min-width: 6rem;
      height: 1.3rem;
     }
  
  }
`;

export const CartAmount = styled.span`
  background: ${(props) => props.theme["yellow-dark"]};
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
  padding: 0.2rem;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 999px;
  position: absolute;
  top: 22px;

  @media (max-width: 600px) {
    top: 20px
  }
`;
