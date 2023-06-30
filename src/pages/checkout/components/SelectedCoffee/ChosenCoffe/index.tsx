import { Minus, Plus, Trash } from "phosphor-react"
import { AmountCoffee, Buttons, CoffeImg, IncreaseDecrease, NameCoffee, Price, Remove, TypeCoffe, TypeImage } from "./styles"

export const ChosenCoffe = () => {
   return (
    <TypeCoffe>
    <TypeImage className="type-image">
      <CoffeImg src="src/assets/coffes-images/americano.png" alt="" />
      <NameCoffee>Expresso Tradicional</NameCoffee>
      <Price>R$ 9,90</Price>
    </TypeImage>
    <Buttons>
      <IncreaseDecrease>
        <Minus size={18} color="#8047F8" />
      </IncreaseDecrease>
      <AmountCoffee>1</AmountCoffee>
      <IncreaseDecrease>
        <Plus size={18} color="#8047F8" />
      </IncreaseDecrease>
      <Remove>
        <Trash size={18} color="#8047F8" /> Remover
      </Remove>
    </Buttons>
  </TypeCoffe>
   )
}