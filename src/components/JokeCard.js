import { Link } from "react-router-dom";
import "./JokeCard.css";
import light from "../assets/assets_Homework_Front-End_02/orange-light.png";
import right from "../assets/assets_Homework_Front-End_02/path-copy-3.png";

function JokeCard({ jokeProp }) {
  const { categories, value } = jokeProp;
  return (
    <div className="card">
      <div className="card-header">
        <img src={light} alt="light-icon" />
        <p>{categories} JOKE</p>
      </div>
      <div className="card-body">
        <p>{value}</p>
      </div>
      <div className="card-footer">
        <Link as="button" className="category-link" to={`/random/category/${categories}`}>
          See Stats <img src={right} alt="icon" />
        </Link>
      </div>
    </div>
  );
}
export default JokeCard;
