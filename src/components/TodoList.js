import React, {Component} from 'react';
import Task from "./Task";
import api from "../services/api";

class TodoList extends Component {

  state = {
    tasks:[]
  }
  
  async componentDidMount(){
    const res = await api.get("todo");
    this.setState({tasks: res.data});
  }
  
  render(){
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