import React, {Component} from 'react';
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../services/api";

class TodoInput extends Component {
  //const [Task,setTask] = useState("");
  state = {
    task : "",
    input : undefined
  }
  
  async Input(){
    if(this.state.task === "")
      return;

    const conteudo = {
      data: {
        text: this.state.task,
        status: "todo"
      }
    }
    console.log(conteudo);
    await api.post("create", conteudo);
  }

  render(){
    return (
      <form className="input-container" onSubmit={(event) => this.handleSubmit(event)}>
          <input
            className="addTask" 
            type="text"
            placeholder="Adicione uma tarefa"
            onChange = {(evento) => this.setState({task : evento.target.value})}
            value = {this.state.task}
          />
          <IconContext.Provider value={{color:"#00B0FF", size:"20px"}}>
          <div className='icon-container'>
            <button className='plus-button'  onClick={() => this.Input()}><AiOutlinePlus/></button>
          </div>
        </IconContext.Provider>
      </form>
    );
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      task : ""
    });
  }
}



export default TodoInput;
