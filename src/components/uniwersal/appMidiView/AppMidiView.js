import React, { useEffect, useState } from "react";
import "./appMidiView.css";
import star from "../../../img/star.png";
function AppMidiView({ app, ico, img, name, category, rate, setApp }) {
  return (
    <div onClick={() => setApp(app)} className="appMidiView">
      <img src={ico} alt="ico" />
      <div className="info">
        <div>
          <h1>{name}</h1>
          <h2>{category}</h2>
          <h3>
            {rate}
            <img src={star} alt="star" />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AppMidiView;
