import styled from "styled-components";

export const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1rem;
  border: 0;
  width: 90%;
  border-radius: 9px;
  background: ${(props) => props.theme["base-input"]};
 
  &:focus {
    border-color: ${(props) => props.theme["base-red"]};
  }

`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMensage = styled.p`
   color: ${(props) => props.theme["base-red"]};  
`
