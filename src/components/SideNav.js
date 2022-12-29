import { Link } from "react-router-dom";
// import "./SideNav.css";
function SideNav(prop) {
  const { width, setMenu, menu } = prop;
  return (
    <>
      <div className="side-nav" style={{ width: `${width}px` }}>
        <span className="closebtn" onClick={() => setMenu(!menu)}>
          &times;
        </span>
        <Link to="/">SO FUNKTIONIERT'S</Link>
        <Link to="/">SONDERANGEBOTE</Link>
        <Link to="/">MEIN BEREICH</Link>
        <ul className="side-nav-sublist-container">
          <li className="sublist">
            <Link>My Publish Jokes</Link>
          </li>
          <li className="sublist">
            <Link>My saved jokes</Link>
          </li>
          <li className="sublist">
            <Link>Account information</Link>
          </li>
          <li className="sublist">
            <Link>Publish new joke</Link>
          </li>
        </ul>
        ;
      </div>
    </>
  );
}
export default SideNav;
