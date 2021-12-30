import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import "./app.css";
import AppInfo from "./components/appInfo/AppInfo";
function App() {
  const [app, setApp] = useState(null);
  const [rec, setRec] = useState(null);
  return (
    <div className="App">
      <AppInfo setApp={setApp} app={app} />
      <Search rec={rec} setRec={setRec} setApp={setApp} />
    </div>
  );
}

export default App;
