// import { useState, useEffect } from "react";
import "./Banner.css";
import search from "../assets/assets_Homework_Front-End_01/search-copy.png";

function Header() {
  // const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);
  return (
    <div className="big-image">
      <h1>The Jokes Bible</h1>
      <h2> Daily Laughs for you and yours</h2>
      <div className="search-container">
        <input type="text" placeholder="How can we make you laugh today?" className="search-bar" />
        <img src={search} className="search-icon " alt="seacrch icon" />
      </div>
    </div>
  );
}
export default Header;
