import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./style/list.css";
function SearchList({ rec, setApp }) {
  return (
    <div className="SearchList">
      <div>
        {rec
          ? rec.map((element) => (
              <SearchResult
                key={element.id}
                element={element}
                setApp={setApp}
              ></SearchResult>
            ))
          : ""}
      </div>
    </div>
  );
}

export default SearchList;
