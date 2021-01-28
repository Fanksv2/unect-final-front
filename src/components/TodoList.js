import React, {Component} from 'react';
import Task from "./Task";
import api from "../services/api";
import io from "socket.io-client";

class TodoList extends Component {

  state = {
    tasks:[]
  }

  registerSocket(){
    const socket = io("http://localhost:3030", { transport : ['websocket'] });
  
    socket.on("create", () => {
      this.refreshData();
    });
    socket.on("delete", () => {
      this.refreshData();
    });
    socket.on("check", () => {
      this.refreshData();
    });
  }

  async refreshData(){
    const res = await api.get("todo");
    this.setState({tasks: res.data});
  }

  async componentDidMount(){
    this.refreshData();
  }
  
  render(){
    this.registerSocket();
    return (
      <section className="todo-area">
        <h2>TO DO</h2>
        {
          this.state.tasks.map(task =>(
              <Task data={task} key={task._id}/>
            )
          )
          
        }
      </section>
    )
  }
  
}

export default TodoList;