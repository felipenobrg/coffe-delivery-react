import CoffesData from "../../data/coffesdata/index";
import CoffesAvailable  from "../CoffesAvailable";

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