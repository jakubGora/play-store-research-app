import React, { useEffect, useState } from "react";
import "./style/result.css";
function SearchResult({ element, setApp }) {
  return (
    <div className="SearchResult">
      <div className="content">
        <img
          width="100px"
          height="100px"
          src={
            element.icons
              ? element.icons?.small
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tXNRzLA0t0k7JW1ukW-nEmvWKWmJ88NABA&usqp=CAU"
          }
          alt="new"
        />
        <div className="info">
          <h1>{element.name}</h1>
          <p>{element.developer?.name}</p>
          <p>
            {element.score > 0
              ? "Ocena: " + element.rating?.average.toFixed(2) + "/5"
              : ""}
          </p>
        </div>
      </div>
      <button onClick={() => setApp(element)}>Szczegóły</button>
    </div>
  );
}

export default SearchResult;
