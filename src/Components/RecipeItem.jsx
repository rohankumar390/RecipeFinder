import React  from "react";
const RecipeItem = (props) => {
  let { label, image, calories, ingredients } = props;
  return (

    <>
    
      <div className="my-3 box">
        <div className="card-main">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {/* <span className="badge rounded-pill bg-danger"> {source} </span> */}
          </div>
          <div className="img-main">
            <img
              src={
                !image
                  ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                  : image
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-light bg-dark " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{label} </h5>
            <p className="card-text border border-dark" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> Calories  : {calories.toFixed()}</p>
            <p className="card-text">
              <ul>
                {ingredients.map((ing) => (
                  <li>{ing.text}</li>
                ))}
              </ul>
            </p>
            {/* <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;