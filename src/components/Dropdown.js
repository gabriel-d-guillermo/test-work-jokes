import { useState } from "react";

import "./Dropdown.css";

function Dropdown() {
  return (
    <ul className="dropdown-menu">
      <li className="dropdown-item">
        My Publish Jokes
        <hr />
      </li>
      <li className="dropdown-item">
        My saved jokes
        <hr />
      </li>
      <li className="dropdown-item">
        Account information
        <hr />
      </li>
      <li className="dropdown-item">Publish new joke</li>
    </ul>
  );
}
export default Dropdown;
