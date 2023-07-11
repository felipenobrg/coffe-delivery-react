import styled from "styled-components";

export const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1rem;
  border: 0;
  padding: 1rem;
  width: 90%;
  border-radius: 9px;
  background: ${(props) => props.theme["base-input"]};


`;

export const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   font-size: 0.9rem;
`;

export const ErrorMensage = styled.p`
   color: ${(props) => props.theme["base-red"]};  
   margin-left: 1rem;
`
