import React, { useState, useEffect } from "react";
import RecipeItem from "./Components/RecipeItem";
import Spinner from "./Components/Spinner";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
const App = () => {
  const [recipeees, setRecipeees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [d, setd] = useState("");

  const [searching, setSearching] = useState("");
  const [url, setUrl] = useState(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${searching}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setProgress(10);
      setUrl(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searching}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
      );
      setProgress(30);
      setProgress(70);
      setProgress(100);
      setd(searching);
    }
  };

  const submit = (e) => {
    setProgress(10);
    setUrl(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searching}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
    );
    setProgress(30);
    setProgress(70);
    setProgress(100);
    setd(searching);
  };
  const newData = (e) => {
    setSearching(e.target.value);
  };

  useEffect(() => {
    getReci();
  }, [url]);

  const getReci = async () => {
    setProgress(100);
    setProgress(30);

    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setRecipeees(data.hits);
    console.log(recipeees);
    setProgress(70);
    setProgress(100);
  };

  return (
    <>
      <div className="heading">
        <h1>My Recipe Finder - {d}</h1>
        <h3>What Do Want To Eat?</h3>
      </div>

      <LoadingBar height={3} color="#f11946" progress={progress} />
      {loading && <Spinner />}

      <div className="inp">
        <input
          type="text"
          style={{ width: "700px", height: "37px" }}
          onChange={newData}
          onKeyDown={handleKeyDown}
        ></input>
        <button type="submit" className="btn btn-dark" onClick={submit}>
          Submit
        </button>
      </div>

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
