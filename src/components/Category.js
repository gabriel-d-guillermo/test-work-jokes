import "./Category.css";
import color from "./BackGroundColor";

function Category(prop) {
  const { category, reset } = prop;
  let key = category;
  let bgColor = "";
  if (key in color) {
    bgColor = color[key];
  }

  return (
    <>
      <button
        className="category-button"
        value={category}
        style={{ backgroundColor: bgColor }}
        onClick={e => {
          reset(e.target.value);
        }}
      >
        {category} Jokes
      </button>
    </>
  );
}
export default Category;
