import { ShoppingCart } from "phosphor-react";
import { CoffesAvailableContainer } from "./styles";
import { NavLink } from "react-router-dom";

interface CoffesProps {
  typeCoffe: string;
  typeCoffeComplete: string;
  descriptionCoffe: string;
  price: number;
}

export const CoffesAvailable = ({
  typeCoffe,
  typeCoffeComplete,
  descriptionCoffe,
  price,
}: CoffesProps) => {
  return (
    <CoffesAvailableContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1686528000&Signature=FXzGOB8PtYT4hAMohMm53Xcjf6z0f-HxoaP9zkE0q2iGE6PC7guNqFtpylW7-5gu9tisi0Cn4VXm~ZUqsNdXlQTuFfINMphGN5N88X4jWudE5l1Tf5rt~G0B4QU7vEbfgmD3t2CoLri1TI07Wm1zaAe71jtCo3jMSPLshh4a637ZjDyQP7~mFQp1xjCV9G8eGKkK3tQXAE9rlb0jnLQ2OKlcqbN2sEbUlp7Q0n6msAsknGFbb~cdW8SgIwQDJgoaaxA~MQLjvmjsJztGCOcVgqVww2KPn3KsPQoFr3IKAOMjyiACy1bN2r~dtQ1iYAR~bfjPPy20e~ahlq9~wZkCfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <h4>{typeCoffe}</h4>
      <h2>{typeCoffeComplete}</h2>
      <p>{descriptionCoffe}</p>
      <div>
        R$ <span className="price">{price}</span>
        <button>-</button>
        <span className="amount">1</span>
        <button>+</button>
        <NavLink to={"/checkout"}>
          <button className="shopping-cart">
            <ShoppingCart size={13} weight="fill" color="#fff" />
          </button>
        </NavLink>
      </div>
    </CoffesAvailableContainer>
  );
};
