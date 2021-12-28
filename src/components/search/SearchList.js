import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./style/list.css";
function SearchList({ rec }) {
  return (
    <div className="SearchList">
      <div>
        {rec
          ? rec.map((element) => (
              <SearchResult element={element}></SearchResult>
            ))
          : ""}
      </div>
    </div>
  );
}

export default SearchList;
