import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import Main from "./Main";

function Category() {
  const category = useParams().category;

 console.log(category);


  const [menus, setMenus] = useState([]);

  function getMenus() {
    axios
      .get("http://localhost:3000/api/allmenu.json")
      .then(function (getData) {
        var array = [];

        for (let i in getData.data) {
          if (getData.data[i].category.toLowerCase() === category) {
            array.push(getData.data[i]);
          }
        }
        setMenus(array);
      });
  }

  useEffect(getMenus);
  return (
    <div >
        <Header />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div>
            {menus.map(function (menu) {
              return (
                <Main
                  id={menu.id}
                  key={menu.key}
                  name={menu.name}
                  preis={menu.preis}
                  content={menu.content}
                  photo={menu.photo}
                />
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default Category;
