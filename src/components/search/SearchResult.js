import React, { useEffect, useState } from "react";
import "./style/result.css";
function SearchResult({ element }) {
  return (
    <div className="SearchResult">
      <div className="content">
        <img width="100px" src={element?.icon} alt="new" />
        <div className="info">
          <h1>{element.title}</h1>
          <h2>Developer: {element.developer}</h2>
          <h2>
            {element.score > 0
              ? "Ocena: " + element.score.toFixed(2) + "/5"
              : ""}
          </h2>
        </div>
      </div>
      <button>Szczegóły</button>
    </div>
  );
}

export default SearchResult;
