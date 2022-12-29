import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import arrowLeft from "../assets/assets_Homework_Front-End_02/arrow-left.png";
import like from "../assets/assets_Homework_Front-End_02/hand.png";
import dislike from "../assets/assets_Homework_Front-End_02/hand-copy.png";

function View() {
  const { category } = useParams();

  const [jokeCategory, setJokeCategory] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  useEffect(() => {
    async function makeRequests() {
      setIsLoading(true);
      try {
        const request = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const requestData = await request.json();
        setJokeCategory(requestData.categories);
        setValue(requestData.value);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    makeRequests();
  }, [category]);

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="joke-main-container">
      <div className="btn-back">
        <Link to="/" className="back-link">
          <img src={arrowLeft} alt="arrow" />
        </Link>
      </div>

      <div className="joke-container">
        <div>
          <div className="joke-card">
            <div className="joke-card-header">
              <div className="joke-category">{jokeCategory} Jokes </div>
            </div>
            <div className="joke-card-body">
              <h3>The Chuck Jokes </h3>
              <p>{value}</p>
            </div>
          </div>
          <div className="icons-container">
            <div className="icon-container">
              <button className="like-icon" onClick={() => setLikeCount(likeCount + 1)}>
                <img src={like} alt="like icon" />
              </button>
              <p>{likeCount}</p>
            </div>
            <div className="icon-container">
              <button className="dislike-icon" onClick={() => setDislikeCount(dislikeCount + 1)}>
                <img src={dislike} alt="dislike icon" />
              </button>
              <p>{dislikeCount}</p>
            </div>
          </div>
        </div>
        <div className="side">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore, neque quia fuga eius libero
          cum officiis impedit necessitatibus odit sint totam dolore. Numquam, eos dolorem quasi ex neque unde?
        </div>
      </div>
    </div>
  );
}
export default View;
