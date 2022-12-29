import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

import "./Dropdown.css";
import user from "../assets/assets_Homework_Front-End_01/shape.png";
import caretDown from "../assets/assets_Homework_Front-End_02/path.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const btnRef = useRef();

  // close dropdown when click outside the component
  useEffect(() => {
    const closeDropdown = e => {
      let path = e.composedPath();
      if (path[0] !== btnRef.current) {
        setDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link to="/" className="SO-FUNCTIONIERTS navbar-item">
          SO FUNKTIONIERT'S
        </Link>
        <Link to="/" className="SONDERANGEBOTE navbar-item">
          SONDERANGEBOTE
        </Link>
        <div
          ref={btnRef}
          className={dropdown ? "MEIN-BEREICH navbar-item  active" : "MEIN-BEREICH navbar-item "}
          onClick={() => setDropdown(!dropdown)}
        >
          <img src={user} alt="icon" className="user-icon" />
          MEIN BEREICH
          <img src={caretDown} alt="icon" className="caret-icon" />
          {dropdown && <Dropdown />}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
