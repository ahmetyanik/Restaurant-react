import React from "react";

function Main(menu) {
  return (
    <div className="main">
      <div>
        <div
          className="menu_img"
          style={{ backgroundImage: `url(${menu.photo})` }}
        />
        <div className="tablet_main_right">
          <div className="menu_name_preis">
            <div>
              <h4>{menu.name}</h4>
              <span>${menu.preis}</span>
            </div>
          </div>
          <div className="menu_line"/>
          <div className="menu_content" style={{wordWrap:"break-word"}}>{menu.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
