import React from "react";

const RecipeItem = (props) => {
  let { text, cal, ingre, source, imageUrl } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {!source?source:"Balanced"} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{text} </h5>
          <p className="card-text ">{cal}</p>
          <p className="card-text">
            {ingre&& ingre.map((ele) => (
              <li>{ele.text}</li>
            ))}
          </p>
          {/* <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
