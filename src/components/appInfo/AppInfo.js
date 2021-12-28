import { useEffect, useState } from "react";
import "./style/infoApp.css";
function AppInfo({ appId }) {
  const [app, setApp] = useState(null);

  if (appId)
    fetch("https://play-store2.p.rapidapi.com/app/" + appId, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "play-store2.p.rapidapi.com",
        "x-rapidapi-key": "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setApp(data);
        console.log(data);
      });

  return appId ? (
    <div className="appInfo">
      <div className="content">
        <h1>{app.title}</h1>
        <p>{app.developer}</p>
        <p>{app.category}</p>
        <p>{app.releaseDate}</p>
        <p>{app.summary}</p>
        <p>{app.description}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AppInfo;
