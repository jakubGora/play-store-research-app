import { useEffect, useState } from "react";
import "./style/infoApp.css";

const moreLess = (e, app, more, setMore) => {
  setMore(!more);
  if (more) {
    e.target.parentElement.childNodes[0].innerText = app.description;
  } else {
    e.target.parentElement.childNodes[0].innerText =
      e.target.parentElement.childNodes[0].innerText.substring(0, 256);
  }
};

function AppInfo({ setApp, app }) {
  const [revs, setRevs] = useState();
  const [more, setMore] = useState(false);
  const [revsAmount, setRevsAmount] = useState(5);
  useEffect(() => {
    if (app)
      fetch(
        "https://app-stores.p.rapidapi.com/reviews?store=google&id=" +
          app.id +
          "&language=pl",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "app-stores.p.rapidapi.com",
            "x-rapidapi-key":
              "23751b834cmsh7c2bed1e66012b8p117a95jsn54ce804c761e",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setRevs(data);
          console.log(data);
        });
  }, [app]);

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
          <button
            className="x"
            onClick={() => {
              setApp(null);
              setRevsAmount(5);
            }}
          >
            <img src="https://image.flaticon.com/icons/png/512/992/992660.png" />
          </button>
          <button className="buy">
            {app.price.display != "Free"
              ? "Kup za " + app.price.display
              : "Zainstaluj"}
          </button>
        </div>

        <div className="line"></div>

        <div className="screens">
          {app.screenshots.map((e) => (
            <img key={e} src={e} alt="new" />
          ))}
        </div>

        <div className="description">
          <h1>Opis</h1>
          <p className="desc">{app.description.substring(0, 256)}</p>
          <button onClick={(e) => moreLess(e, app, more, setMore)}>
            WIĘCEIJ INFORMACJI
          </button>
        </div>

        <div className="line"></div>

        <div className="rev">
          <h1>Opinie</h1>
          {revs ? (
            revs.map((e, i) =>
              i < revsAmount ? (
                <div className="review">
                  <div className="centerRev">
                    <img src={e.author.image} alt="img" />
                    <h3>{e.rating}/5</h3>
                  </div>

                  <div>
                    <h1>{e.author.name}</h1>
                    <h2>{e.date.substring(0, 10)}</h2>

                    <p>{e.content.body}</p>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          ) : (
            <p>Brak</p>
          )}
          ;
        </div>
        {revs ? (
          <button
            className="revs"
            onClick={(e) => setRevsAmount(revsAmount + 5)}
          >
            WIĘCEIJ OPINI
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default AppInfo;
