import styled from "styled-components";

export const InputContainer = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  border: 0;
  width: 90%;
  border-radius: 9px;
`;

export const InputWrapper = styled.div`
  p {
    margin: 0.5rem 0 0 1.5rem;
    color: ${(props) => props.theme["base-red"]};
  }
`;
