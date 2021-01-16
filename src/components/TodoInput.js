import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";

function TodoInput() {
  return (
    <div className="input-container">
      <input
        className="addTask" 
        type="text"
        placeholder="Adicione uma tarefa"
      />
      <IconContext.Provider value={{color:"#00B0FF", size:"20px"}}>
      <div className='icon-container'>
        <button className='plus-button'><AiOutlinePlus/></button>
      </div>
      </IconContext.Provider>
    </div>
  );
}

export default TodoInput;