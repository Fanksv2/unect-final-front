import React, {Component} from 'react';
import Task from './Task';
import api from "../services/api";

class DoneList extends Component {

  state = {
    tasks:[]
  }

  async componentDidMount(){
    const res = await api.get("done");
    this.setState({tasks: res.data});
  }

  render() {
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