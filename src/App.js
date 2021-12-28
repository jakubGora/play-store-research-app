import React, { useEffect, useState } from "react";

const load = (a, b) => {
  if (a && b)
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + b, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "bf9842a70cmsh058f8b5cbb8b445p1fbd7djsn9b44921e5ae7",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        a(data.d);
        console.log(data.d);
      });
};

function App() {
  const [rec, setRec] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    if (!rec) load(setRec);
  });
  return (
    <div className="App">
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => load(setRec, name)}>asd</button>
      <div>
        {rec
          ? rec.map((element) => (
              <div>
                <img width="100px" src={element.i?.imageUrl} alt="new" />
                <h1>{element.l}</h1>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
