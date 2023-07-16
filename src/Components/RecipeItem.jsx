import React from "react";

const RecipeItem = (props) => {
  let { label, image, calories, ingredients } = props;
  return (
    <>
      <h1>{label}</h1>
      <img src={image} alt="" />
      <p>{calories.toFixed()}</p>
      <ul>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ul>
    </>
  );
};

export default RecipeItem;