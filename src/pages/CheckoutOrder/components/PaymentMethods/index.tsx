import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({
  id,
  icon,
  label,
  ...props
}, ref) => {
  return (
    <>
    <input type="radio" {...props} id={id} name="paymentMethod" ref={ref} />
    <label htmlFor={id}>
      <ContentContainer className="input-card">
        {icon}
        {label}
      </ContentContainer>
    </label>
  </>
  )
})
