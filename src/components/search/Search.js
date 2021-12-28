import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import logo from "../../logo.png";
import "./style/search.css";
const load = (a, b) => {
  if (a && b)
    fetch(
      "https://play-store2.p.rapidapi.com/search?q=" +
        b +
        "&country=pl&lang=pl",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "play-store2.p.rapidapi.com",
          "x-rapidapi-key":
            "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        a(data);
        console.log(data);
      });
};
function Search() {
  const [rec, setRec] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    if (!rec) load(setRec);
  });
  return (
    <div className="Search">
      <img src={logo} />
      <div className="search-input">
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={() => load(setRec, name)}>Szukaj</button>
      </div>
      <SearchList rec={rec}></SearchList>
    </div>
  );
}

export default Search;
