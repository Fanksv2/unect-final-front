import React from 'react';

function TodoList() {
  let image=require("../assets/img/fxemoji_beachumbrella.png");
  return (
    <section className="todo-area">
      <h2>TO DO</h2>
      <div className="empty">
        <img src={image.default} alt="beach fxemoji"/>
        <span>Nada por aqui!</span>
      </div>
    </section>
  );
}

export default TodoList;