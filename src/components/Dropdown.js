import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-item">
        <Link to="/"> My Publish Jokes</Link>
        <hr />
      </li>
      <li className="dropdown-item">
        <Link to="/">My saved jokes</Link>
        <hr />
      </li>
      <li className="dropdown-item">
        <Link to="/"> Account information</Link>
        <hr />
      </li>

      <li className="dropdown-item">
        <Link to="/">Publish new joke </Link>
      </li>
    </ul>
  );
}
export default Dropdown;
