import React from 'react';
import Task from "./Task";

function TodoList() {

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

  var data = {
    id: "60062e215ea4951e28edef7c",
    content: {
      text: "dsahusadhdsa",
      "status": "todo"
    }
  }

  return (
    <section className="todo-area">
      <h2>TO DO</h2>
      <Task data={data}/>
    </section>
  );
}

export default TodoList;