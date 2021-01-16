import React from 'react';

function DoneList() {
  let image=require("../assets/img/fxemoji_beachumbrella.png");
  
  return (
    <section className="done-area">
      <h2>DONE</h2>
      <div className="empty">
        <img src={image.default} alt="beach fxemoji"/>
        <span>Nada por aqui!</span>
      </div>
    </section>
  );
}

export default DoneList;