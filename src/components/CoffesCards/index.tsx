import { CoffesAvailable } from "../Coffes/index";
import CoffesData from "../../data/coffesdata/index";

export const CoffesCards = () => {
  return (
    <div>
      {CoffesData.map(coffee => {
        return (
          <CoffesAvailable key={coffee.id} coffee={coffee} />
        );
      })}
    </div>
  );
};