import React, { useEffect, useState } from "react";
import AppMidiView from "../../uniwersal/appMidiView/AppMidiView";
import AppView from "../../uniwersal/appView/AppView";
import "./foru.css";

function ForU({ nav, setApp, app, aplikacje }) {
  return nav == 0 ? (
    <div className="ForU">
      <div className="group">
        <h1>Odkryj polecane gry</h1>
        <div className="games-list">
          {aplikacje
            ? aplikacje
                .slice(0, 5)
                .map((app) => (
                  <AppView
                    key={app.id}
                    app={app}
                    ico={app.icons.small}
                    img={app.screenshots[0]}
                    name={app.name}
                    category={app.category}
                    rate={app.ratings.average}
                    setApp={setApp}
                  />
                ))
            : ""}
        </div>
      </div>
      <div className="group">
        <h1>Proponowane gry</h1>
        <div className="games-list">
          {aplikacje
            ? aplikacje
                .slice(5, 10)
                .map((app) => (
                  <AppMidiView
                    key={app.id}
                    app={app}
                    ico={app.icons.small}
                    img={app.screenshots[0]}
                    name={app.name}
                    category={app.category}
                    rate={app.ratings.average}
                    setApp={setApp}
                  />
                ))
            : ""}
        </div>
      </div>
      <div className="group">
        <h1>Nowe i zaktualizowane</h1>
        <div className="games-list">
          {aplikacje
            ? aplikacje
                .slice(10, 15)
                .map((app) => (
                  <AppView
                    key={app.id}
                    app={app}
                    ico={app.icons.small}
                    img={app.screenshots[0]}
                    name={app.name}
                    category={app.category}
                    rate={app.ratings.average}
                    setApp={setApp}
                  />
                ))
            : ""}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ForU;
