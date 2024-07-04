import "./card-list.styles.css";
import Card from "../card/card.component";

import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const Cardlist = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map(mostro => {
      return <Card mostro={mostro} />;
    })}
  </div>
);
export default Cardlist;
