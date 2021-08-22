import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Main from "./Main";

function Home() {
  const [menus, setMenus] = useState([]);

  function getMenus() {
    axios
      .get("http://localhost:3000/api/allmenu.json")
      .then(function (getData) {
        setMenus(getData.data);
      });
  }


  useEffect(getMenus, []);

  return (
    <div>
      <Header />
        <div className="header">
          {menus.map(function ({id,key,name,preis,content,photo}) {
            return (
              <Main
                id={id}
                key={key}
                name={name}
                preis={preis}
                content={content}
                photo={photo}
              />
            );
          })}
        </div>
      </div>
  );
}

export default Home;
