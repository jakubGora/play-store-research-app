import React, { useEffect, useState } from "react";
import TopListRes from "./result/TopListRes";
import "./TopLists.css";
function TopLists({ nav, aplikacje, setApp }) {
  return nav == 1 ? (
    <div className="TopLists">
      {aplikacje.map((app, i) => (
        <TopListRes key={i} i={i} element={app} setApp={setApp} />
      ))}
    </div>
  ) : (
    ""
  );
}

export default TopLists;
