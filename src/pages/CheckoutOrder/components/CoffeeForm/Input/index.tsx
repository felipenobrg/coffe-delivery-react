import { InputHTMLAttributes, forwardRef } from "react";
import { ErrorMensage, InputContainer, InputWrapper } from "../styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, ...props }, ref) => {
    return ( 
        <InputWrapper className={className}>
        <InputContainer {...props} ref={ref} />
       {error && <ErrorMensage>{error}</ErrorMensage>}
       </InputWrapper>
    )
    } 
)
  