import React, { useState, useEffect } from "react";
import RecipeItem from "./Components/RecipeItem";

const App = () => {
  const [recipeees, setRecipeees] = useState([]);
  const [searching, setSearching] = useState("pizza");
  const [url, setUrl] = useState(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${searching}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
  );

  const submit = (e) => {
    setUrl(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searching}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
    );
  };
  const newData = (e) => {
    setSearching(e.target.value);
  };

  useEffect(() => {
    getReci();
  }, [url]);

  const getReci = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setRecipeees(data.hits);
    console.log(recipeees);
  };

  return (
    <>
      <input type="text" onChange={newData} value={searching}></input>
      <button type="submit" onClick={submit}>
        Submit
      </button>

      {recipeees.map((r) => (
        <RecipeItem
          label={r.recipe.label}
          calories={r.recipe.calories}
          image={r.recipe.image}
          ingredients={r.recipe.ingredients}
        />
      ))}
    </>
  );
};

export default App;