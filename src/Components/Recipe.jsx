import React, { useEffect, useState } from "react";
import RecipeItem from './RecipeItem'
const Recipe = (props) => {
  const [articles, setArticles] = useState([]);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateRecipe = async () => {

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${props.category}&app_id=${props.apiId}&app_key=${props.apiKey}`; let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    console.log(parsedData)
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} `;
    updateRecipe();
  }, []);

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Recipe - {capitalizeFirstLetter(props.category)}  </h1>


      <div className="container">
        <div className="row">
          {articles?.map((element) => {
            return (
              // text, quantity, measure, source, foodCategory, url, imageUrl
              <div className="col-md-4" key={element.url}>
                <RecipeItem
                  text={element.ingredients.text ? element.ingredients.text : ""}
                  quantity={element.ingredients.quantity ? element.ingredients.quantity : ""}
                  measure={element.ingredients.measure}
                  foodCategory={element.ingredients.foodCategory}
                  url={element.ingredients.url}
                  imageUrl={element.ingredients.image}
                  source={element.ingredients.source}
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
