import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

import "./Dropdown.css";
import user from "../assets/assets_Homework_Front-End_01/shape.png";
import navIcon from "../assets/assets_Homework_Front-End_01/shape@2x.png";
import caretDown from "../assets/assets_Homework_Front-End_02/path.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const btnRef = useRef();
  let width = 0;
  if (menu) {
    width = 250;
  }
  // close dropdown when click outside the component;;;
  useEffect(() => {
    const closeDropdown = e => {
      let path = e.composedPath();
      if (path[0] !== btnRef.current) {
        setDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);
  return (
    <>
      <div className="side-nav" style={{ width: `${width}px` }}>
        <span className="closebtn" onClick={() => setMenu(!menu)}>
          &times;
        </span>
        <Link>SO FUNKTIONIERT'S</Link>
        <Link>SONDERANGEBOTE</Link>
        <Link>MEIN BEREICH</Link>
        <Link>Contact</Link>
      </div>
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
        <button className="nav-icon" onClick={() => setMenu(!menu)}>
          <img src={navIcon} alt="icon" />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
