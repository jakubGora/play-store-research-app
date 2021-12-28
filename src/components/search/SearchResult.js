import React, { useEffect, useState } from "react";
import "./style/result.css";
function SearchResult({ element, setAppId }) {
  return (
    <div className="SearchResult">
      <div className="content">
        <img width="100px" src={element?.icon} alt="new" />
        <div className="info">
          <h1>{element.title}</h1>
          <p>{element.developer}</p>
          <p>
            {element.score > 0
              ? "Ocena: " + element.score.toFixed(2) + "/5"
              : ""}
          </p>
        </div>
      </div>
      <button onClick={() => setAppId(element.appId)}>Szczegóły</button>
    </div>
  );
}

export default SearchResult;
