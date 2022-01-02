import React, { useEffect, useState } from "react";
import "./topListResult.css";
import star from "../../../../img/star.png";
function TopListRes({ i, element, setApp }) {
  return (
    <div onClick={() => setApp(element)} className="SearchResult">
      <div className="content">
        <h4>{i}</h4>
        <img
          width="60px"
          height="60px"
          src={
            element.icons
              ? element.icons?.small
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tXNRzLA0t0k7JW1ukW-nEmvWKWmJ88NABA&usqp=CAU"
          }
          alt="new"
        />
        <div className="info">
          <h1>{element.name}</h1>
          <p>
            {element.developer?.name} • {element.category}{" "}
          </p>
          <p>
            {element.ratings ? element.ratings.average : ""}
            <img src={star} alt="star" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopListRes;
