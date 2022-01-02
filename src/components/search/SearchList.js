import React, { useEffect, useState } from "react";
import SearchResult from "../uniwersal/searchRes/SearchResult";
import "./style/list.css";
function SearchList({ rec, setApp }) {
  return rec ? (
    <div className="SearchList">
      <div>
        {rec.map((element) => (
          <SearchResult
            key={element.id}
            element={element}
            setApp={setApp}
          ></SearchResult>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default SearchList;
