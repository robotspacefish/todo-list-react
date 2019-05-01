import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo, this.props.listType)
  }

  render() {
    const displayRating = (times) => '! '.repeat(times);
    return (
      <div className="todo">
        <input onClick={() => this.props.handleCompletedTodoToggle(this.props.todo)} type="checkbox" className="completed-btn" name="complete" defaultChecked={this.props.listType === 'completed'} />

        <p className="todo-txt">{this.props.todo.todo}</p>
        <span className="urgency-rating">{displayRating(this.props.todo.rating)}</span>
        <button className="edit-todo-btn"><i class="fas fa-pencil-alt"></i></button>
        <button className="delete-todo-btn" onClick={this.handleDeleteTodo}><i class="far fa-trash-alt"></i></button>
      </div>
    )
  }
}


// import React from 'react';
// import './Todo.css';

// const Todo = ({ todo, deleteTodo, handleCompletedTodoToggle, listType }) => {
//   const displayRating = (times) => '! '.repeat(times);
//   const handleDeleteTodo = () => {
//     this.props.deleteTodo(todo, listType)
//   }
//   return (
//     <div className="todo">
//       <input onClick={() => handleCompletedTodoToggle(todo)} type="checkbox" className="completed-btn" name="complete" defaultChecked={listType === 'completed'} />

//       <p className="todo-txt">{todo.todo}</p>
//       <span className="urgency-rating">{displayRating(todo.rating)}</span>
//       <button className="delete-todo-btn" onClick={this.handleDeleteTodo}>Delete</button>
//     </div>
//   );
// }


// export default Todo;