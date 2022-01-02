import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import logo from "../../logo.png";
import "./style/search.css";
import AppInfo from "../appInfo/AppInfo";
const load = (e, a, b, c) => {
  e.preventDefault();
  if (e.target.childNodes[1].value) {
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
              "e4231613cbmsh71953add4d5886cp14ee51jsn2b665e331106",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          c(false);
          console.log(data);
          a(data);
        });
  } else {
    a(null);
  }
};
function Search({ setApp, rec, setRec }) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(null);

  return (
    <div className="Search">
      <div className="search-input">
        <img src={logo} alt="logo" />
        <form onSubmit={(e) => load(e, setRec, name, setLoading)}>
          {rec ? (
            <div
              onClick={(e) => {
                setRec(null);
                e.target.parentNode.childNodes[1].value = "";
              }}
              className="button"
            />
          ) : (
            ""
          )}
          <input
            className={!rec ? "home" : ""}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Szukaj aplikacji i gier"
          ></input>
          <input type="submit" value="" />
        </form>
      </div>
      {loading ? <div className="loader"></div> : ""}
    </div>
  );
}

export default Search;
