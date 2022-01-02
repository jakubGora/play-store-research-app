import React, { useEffect, useState } from "react";
import "./appView.css";
import star from "../../../img/star.png";
function AppView({ app, ico, img, name, category, rate, setApp }) {
  return (
    <div onClick={() => setApp(app)} className="appView">
      <div
        className="img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="info">
        <img src={ico} alt="ico" />
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

export default AppView;
