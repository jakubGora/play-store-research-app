import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import logo from "../../logo.png";
import "./style/search.css";
import AppInfo from "../appInfo/AppInfo";
const load = (a, b, c) => {
  c(true);
  if (a && b)
    fetch(
      "https://app-stores.p.rapidapi.com/search?store=google&term=" +
        b +
        "&language=pl",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "app-stores.p.rapidapi.com",
          "x-rapidapi-key":
            "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        c(false);
        a(data);
        console.log(data);
      });
};
function Search({ setApp, rec, setRec }) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(null);

  return (
    <div className="Search">
      <img src={logo} />
      <div className="search-input">
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={() => load(setRec, name, setLoading)}>Szukaj</button>
      </div>
      {loading ? <div className="loader"></div> : ""}

      {!loading ? <SearchList rec={rec} setApp={setApp}></SearchList> : ""}
    </div>
  );
}

export default Search;
