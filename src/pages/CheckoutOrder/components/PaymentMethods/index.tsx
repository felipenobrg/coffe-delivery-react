import { InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethod = ({ id, icon, label, ...props }: PaymentMethodInputProps) => {
  return (
    <>
     <input type="radio" {...props} id={id} />
     <label htmlFor={id}>
     <ContentContainer  className="input-card">
      {icon}
      {label}
     </ContentContainer>
     </label>
    </>
  );
};
