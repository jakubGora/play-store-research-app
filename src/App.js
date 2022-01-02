import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import "./app.css";
import SearchList from "./components/search/SearchList";
import AppInfo from "./components/appInfo/AppInfo";
import Home from "./components/home/Home";
function App() {
  const [app, setApp] = useState(null);
  const [rec, setRec] = useState(null);

  return (
    <div className="App">
      <AppInfo setApp={setApp} app={app} />
      <Search rec={rec} setRec={setRec} setApp={setApp} />
      <SearchList rec={rec} setApp={setApp}></SearchList>
      <Home rec={rec} setApp={setApp} app={app} />
    </div>
  );
}

export default App;
