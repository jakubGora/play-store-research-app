import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./style/list.css";
function SearchList({ rec, setAppId }) {
  return (
    <div className="SearchList">
      <div>
        {rec
          ? rec.map((element) => (
              <SearchResult
                element={element}
                setAppId={setAppId}
              ></SearchResult>
            ))
          : ""}
      </div>
    </div>
  );
}

export default SearchList;
