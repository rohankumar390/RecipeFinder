import React, { useEffect, useState } from "react";
import RecipeItem from './RecipeItem'
const Recipe = (props) => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('pizza');
  const [url, setUrl] = useState(
    `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
  );


  const FinalSubmit = () => {
    console.log("submitted")
    setUrl(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${setSearch}&app_id=8e61d206&app_key=6d2ac43a24b3a3fb87c21d003c9eaaff%09`
      );
      console.log(setUrl)
  };
  const updateRecipe = async () => {

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.hits);
    console.log(parsedData)
  };

  useEffect(() => {
    // document.title = `${capitalizeFirstLetter(props.category)} `;
    updateRecipe();
  }, [setUrl]);
  // const newData = (e) => {
  //   setSearch(e.target.value);
  // };
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Recipe  </h1>

      <div className="up-code">
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Write the name" />
        <button type="submit" onClick={FinalSubmit}>Submit</button>
      </div>

      <div className="container">
        <div className="row">
          {articles?.map((element) => {
            return (
              // text, quantity, measure, source, foodCategory, url, imageUrl
              <div className="col-md-4" key={element.url}>
                <RecipeItem
                  text={element.recipe.label}
                  cal={element.recipe.calories}
                  ingre={element.recipe.ingredients}
                  source={element.recipe.dietLabels}
                  imageUrl={element.recipe.image}
                />

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recipe;
