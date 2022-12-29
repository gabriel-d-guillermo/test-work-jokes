import { useState, useEffect, useRef } from "react";

import "./Banner.css";
import search from "../assets/assets_Homework_Front-End_01/search-copy.png";
import { Link } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [viewResult, setViewResult] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = event => {
    if (!searchRef.current.contains(event.target)) {
      setViewResult(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    if (query.length >= 3) {
      setViewResult(true);
      fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, { signal: controller.signal })
        .then(res => res.json())
        .then(data => {
          setResults(data.result);
          setTotal(data.total);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setViewResult(false);
      setResults([]);
      setTotal(0);
    }
    return () => controller.abort();
  }, [query]);

  return (
    <div className="big-image">
      <h1>The Jokes Bible</h1>
      <h2> Daily Laughs for you and yours</h2>
      <div className="search-container">
        <input
          ref={searchRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="How can we make you laugh today?"
          className="search-bar"
        />
        <img src={search} className="search-icon " alt="seacrch icon" />

        {/* show results */}
        {!viewResult ? (
          ""
        ) : (
          <div className="search-result-container">
            <ul className="search-result">
              {results.map((val, index) => {
                return (
                  <li key={index}>
                    <Link to="/">
                      {val.categories.length === 0 ? "Uncategorize jokes" : val.categories} : {val.value} jokes
                    </Link>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <p>Result : {total}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
