import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Dropdown from "./Dropdown";
import "./SideNav.css";
import "./Navbar.css";

import "./Dropdown.css";
import user from "../assets/assets_Homework_Front-End_01/shape.png";
import navIcon from "../assets/assets_Homework_Front-End_01/shape@2x.png";
import caretDown from "../assets/assets_Homework_Front-End_02/path.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);

  let width = 0;
  if (menu) {
    width = 250;
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = event => {
    if (!dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  return (
    <>
      <SideNav width={width} setMenu={setMenu} menu={menu} />
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to="/" className="SO-FUNCTIONIERTS navbar-item">
            SO FUNKTIONIERT'S
          </Link>
          <Link to="/" className="SONDERANGEBOTE navbar-item">
            SONDERANGEBOTE
          </Link>
          <div
            ref={dropdownRef}
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
