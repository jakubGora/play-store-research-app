import React, { useEffect, useState } from "react";
import ForChilds from "./ForChilds/ForChilds";
import ForU from "./ForU/ForU";
import Paid from "./Paid/Paid";
import "./style/home.css";
import TopLists from "./TopLists/TopLists";
function Home({ rec, setApp, app }) {
  const [nav, setNav] = useState(0);
  const [aplikacje, setAplikacje] = useState(null);

  if (!aplikacje) {
    fetch(
      "https://app-stores.p.rapidapi.com/search?store=google&term=" +
        "a" +
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
        setAplikacje(data);
      });
  }

  return !rec ? (
    <div className="Home">
      <div className="nav">
        <ul>
          <li>
            <div
              onClick={() => setNav(0)}
              className={"nav " + (nav == 0 ? "clicked" : "")}
            >
              Dla Ciebie
            </div>
          </li>
          <li>
            <div
              onClick={() => setNav(1)}
              className={"nav " + (nav == 1 ? "clicked" : "")}
            >
              Top Listy
            </div>
          </li>
          <li>
            <div
              onClick={() => setNav(2)}
              className={"nav " + (nav == 2 ? "clicked" : "")}
            >
              Dla dzieci
            </div>
          </li>
          <li>
            <div
              onClick={() => setNav(3)}
              className={"nav " + (nav == 3 ? "clicked" : "")}
            >
              Płatne
            </div>
          </li>
        </ul>
      </div>

      <ForU nav={nav} setApp={setApp} app={app} aplikacje={aplikacje} />

      <TopLists nav={nav} aplikacje={aplikacje} setApp={setApp} />

      <ForChilds nav={nav} />

      <Paid nav={nav} />
    </div>
  ) : (
    ""
  );
}

export default Home;
