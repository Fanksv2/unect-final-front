import React, {Component} from 'react';
import Task from './Task';
import api from "../services/api";
import io from "socket.io-client";

class DoneList extends Component {

  state = {
    tasks:[]
  }

  registerSocket(){
    const socket = io("http://localhost:3030", { transport : ['websocket'] });
  
    socket.on("deleteDone", () => {
      this.refreshData();
    });
    socket.on("checkTask", () => {
      this.refreshData();
    });
  }

  async refreshData(){
    const res = await api.get("done");
    this.setState({tasks: res.data});
  }

  async componentDidMount(){
    console.log("RODOUDONE")
    this.registerSocket();
    this.refreshData();
  }

  renderTasks(){
    if(this.state.tasks.length === 0){
      return <Task data={undefined}/>
    }else{
      return(
        this.state.tasks.map(task =>(
          <Task data={task} key={task._id}/>
          )
        )
      )
    }
  }

  render() {
    return (
      <section className="done-area">
        <h2>DONE</h2>
        {
          this.renderTasks()
        }
      </section>
    );
  }
  
}

export default DoneList;