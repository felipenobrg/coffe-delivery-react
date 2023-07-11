import { Header } from "../../components/Header";
import { EnterAdress } from "./components/EnterAdress";
import { CoffeeForm } from "./components/CoffeeForm";
import { SelectedCoffe } from "./components/SelectedCoffee";
import {
  AdressContainer,
  CheckoutContainer,
  CompleteYourOrder,
  MainRow,
} from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().min(1, 'Informe o Número'),
  complemento: zod.string().min(1, 'Informe o Complemento'),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return { message: "Informe o método de pagamento"}
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const navigate = useNavigate()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    navigate("/confirmedOrder", {
      state: data,
    })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <Header />
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteYourOrder>Complete seu pedido</CompleteYourOrder>
        <MainRow>
          <AdressContainer>
            <EnterAdress />
            <CoffeeForm />
          </AdressContainer>
          <SelectedCoffe />
        </MainRow>
      </CheckoutContainer>
    </FormProvider>
  );
};
