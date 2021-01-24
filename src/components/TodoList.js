import React, {Component} from 'react';
import Task from "./Task";

class TodoList extends Component {


  // {
  //   "_id": "60062e215ea4951e28edef7c",
  //   "content": {
  //     "text": "usahusahsau",
  //     "status": "todo"
  //   },
  //   "createdAt": "2021-01-19T00:56:01.859Z",
  //   "updatedAt": "2021-01-19T00:56:01.859Z",
  //   "__v": 0
  // }


  
  render(){
    return (
      <section className="todo-area">
        <h2>TO DO</h2>
        <Task data={undefined}/>
      </section>
    )
  }
  
}

export default TodoList;