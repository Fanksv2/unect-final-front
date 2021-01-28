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
  
    socket.on("delete", () => {
      this.refreshData();
    });
    socket.on("check", () => {
      this.refreshData();
    });
  }

  async refreshData(){
    const res = await api.get("done");
    this.setState({tasks: res.data});
  }

  async componentDidMount(){
    this.refreshData();
  }

  render() {
    this.registerSocket();
    return (
      <section className="done-area">
        <h2>DONE</h2>
        {
          this.state.tasks.map(task =>(
              <Task data={task} key={task._id}/>
            )
          )
        }
      </section>
    );
  }
  
}

export default DoneList;