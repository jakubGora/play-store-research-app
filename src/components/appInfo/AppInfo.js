import { useEffect, useState } from "react";
import "./style/infoApp.css";
function AppInfo({ setApp, app }) {
  // if (!appId)
  //   fetch("https://play-store2.p.rapidapi.com/app/" + appId, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "play-store2.p.rapidapi.com",
  //       "x-rapidapi-key": "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setApp(data);
  //       console.log(data);
  //     });

  return app ? (
    <div className="appInfo">
      <div className="content">
        <div className="header">
          <img
            src={
              app.icons.medium
                ? app.icons.medium
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tXNRzLA0t0k7JW1ukW-nEmvWKWmJ88NABA&usqp=CAU"
            }
            alt="new"
          />
          <div className="heading">
            <h1>{app.name}</h1>
            <div>
              <p>
                {app.developer?.name} | {app.category}
              </p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="x" onClick={() => setApp(null)}>
            <img src="https://image.flaticon.com/icons/png/512/992/992660.png" />
          </button>
          <button className="buy">
            {app.price.display != "Free"
              ? "Kup za " + app.price.display
              : "Zainstaluj"}
          </button>
        </div>

        <div className="screens">
          {app.screenshots.map((e) => (
            <img key={e} src={e} alt="new" />
          ))}
        </div>

        <p className="desc">{app.description}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AppInfo;
