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

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe o nome da rua'),
  numero: zod.string().min(1, 'Informe o numero'),
  complemento: zod.string().min(1, 'Informe o complemento'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    console.log(data)
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
