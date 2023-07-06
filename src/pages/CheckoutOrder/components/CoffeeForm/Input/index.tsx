import { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer, InputWrapper } from "../styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, ...props }, ref) => {
    return ( 
        <InputWrapper>
        <InputContainer {...props} ref={ref} />
       {error && <p>{error}</p>}
       </InputWrapper>
    )
    } 
)
  