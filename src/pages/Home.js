import { useState, useEffect } from "react";
import JokeCard from "../components/JokeCard";
import Category from "../components/Category";

function Home() {
  const [jokes, setJokes] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showALL, setShowAll] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("random");

  //for category buttons
  let num = 0;
  if (!showALL) {
    num = 8;
  } else {
    num = category.length;
  }

  const reset = e => {
    setJokes((jokes.length = 0));
    setCurrentCategory(e);
    makeRequests(e);
  };

  const handleShowAllCategories = () => setShowAll(prev => !prev);

  const ramdomCategoryJokes = data => {
    const requests = [];

    if (Array.isArray(data)) {
      data.map(item => {
        return requests.push(fetch(`https://api.chucknorris.io/jokes/random?category=${item}`));
      });
    }
    if (typeof data === "string") {
      let i = 0;
      while (i < 10) {
        requests.push(fetch(`https://api.chucknorris.io/jokes/random?category=${data}`));
        i++;
      }
    }
    return requests;
  };

  //remove duplicate jokes from API
  const filterJokes = data => {
    const uniqueItems = data.filter((item, index, self) => self.findIndex(t => t.id === item.id) === index);
    setJokes(uniqueItems);
  };

  //make a request to API
  async function makeRequests(data) {
    setIsLoading(true);
    try {
      const requests = ramdomCategoryJokes(data);
      const responses = await Promise.all(requests);
      const results = [];
      for (const response of responses) {
        results.push(await response.json());
      }
      filterJokes([...jokes, ...results]);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    let controller = new AbortController();
    setIsLoading(true);
    const getCategory = async () => {
      try {
        const categories = await fetch("https://api.chucknorris.io/jokes/categories");
        const fetchedData = await categories.json();
        setCategory(fetchedData);
        const requests = ramdomCategoryJokes(fetchedData);
        const responses = await Promise.all(requests);
        const results = [];
        for (const response of responses) {
          results.push(await response.json());
        }
        filterJokes(results);
        setCurrentCategory("random");

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getCategory();

    return () => controller.abort();
  }, []);

  if (isLoading && category.length === 0) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isLoading && category !== 0) {
    return (
      <>
        <div className="category-container">
          {category.slice(0, num).map((item, index) => {
            return <Category key={index} category={category[index]} reset={reset} />;
          })}
        </div>
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      </>
    );
  }
  return (
    <>
      {/* display all joke categories */}
      <div className="category-container">
        {category.slice(0, num).map((item, index) => {
          return <Category key={index} category={category[index]} reset={reset} />;
        })}
      </div>
      {/* button */}
      <div className="show-all-category ">
        <button className=" show-all-button" onClick={handleShowAllCategories}>
          {showALL ? "Show Less Category" : "Show  All Category"}
        </button>
      </div>
      {/* dispaly joke cards */}
      <div className="card-container">
        {jokes.map(joke => {
          return <JokeCard key={joke.id} jokeProp={joke} />;
        })}
      </div>
      <div className="view-more-container">
        {currentCategory === "random" ? (
          <button className="view-more-button" onClick={e => makeRequests(category)}>
            view more
          </button>
        ) : (
          <button className="view-more-button" onClick={e => makeRequests(currentCategory)}>
            view more
          </button>
        )}
      </div>
    </>
  );
}
export default Home;
