import "./card.styles.css";
import { Monster } from "../../App";
//const Card = ({ mostro }) => {
//const { id, name, email } = mostro;

type CardProps = {
  mostro: Monster;
};

const Card = ({ mostro }: CardProps) => {
  const { id, name, email } = mostro;
  return (
    <div className='card-container' key={id}>
      <img
        src={`https://robohash.org/${id}}?set=set4&size=180x180`}
        alt={`mostro ${name}`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
