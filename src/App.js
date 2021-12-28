import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import "./app.css";
import AppInfo from "./components/appInfo/AppInfo";
function App() {
  const [appId, setAppId] = useState(null);

  useEffect(() => {
    console.log("asd");
  }, appId);

  return (
    <div className="App">
      <AppInfo appId={appId} />
      <Search setAppId={setAppId} />
    </div>
  );
}

export default App;
