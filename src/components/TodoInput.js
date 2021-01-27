import React, {useState} from 'react';
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../services/api";

function TodoInput() {
  const [Task,setTask] = useState("");
  
  async function Input(){
    const conteudo = {
      data: {
        text: Task,
        status: "todo"
      }
    }
    await api.post("create", conteudo);
  }
  return (
    <div className="input-container">
      <input
        className="addTask" 
        type="text"
        placeholder="Adicione uma tarefa"
        onChange = {(evento) => setTask(evento.target.value)}
      />
      <IconContext.Provider value={{color:"#00B0FF", size:"20px"}}>
      <div className='icon-container'>
        <button className='plus-button' onClick={Input}><AiOutlinePlus/></button>
      </div>
      </IconContext.Provider>
    </div>
  );
}

export default TodoInput;
