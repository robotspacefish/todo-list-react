import React, { Component } from 'react'
import './Todo.css';
import Rating from '../Rating/Rating';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing : false,
      task : this.props.todo.todo,
      rating : this.props.todo.rating

    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  handleDelete () {
    this.props.deleteTodo(this.props.todo, this.props.listType)
  }

  handleToggle () {
    this.props.toggleTodo(this.props.todo)
  }

  handleEdit (e) {
    e.preventDefault();
    this.setState({ isEditing : false });
    this.props.updateTodo(this.props.todo.id, this.state.task, this.props.listType, this.state.rating);
  }

  toggleEditForm (e) {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange (e) {
    this.setState({ task: e.target.value });
  }

  render() {
    const displayRating = (times) => '! '.repeat(times);
    const hide = this.state.isEditing && 'hide';
    return (
      <div className="todo">
        <input className={`completed-btn ${hide}`}
          onClick={this.handleToggle}
          type="checkbox"
          name="complete"
          defaultChecked={this.props.listType === 'completed'} />

        {
          this.state.isEditing
            ? <form className="Todo-edit-form" onSubmit={this.handleEdit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange} />
                {/* <Rating handleRating={this.handleRating} /> */}
              <button>Save</button>
            </form>
            : <p className="todo-txt">{this.state.task}</p>
        }

        <span className={`urgency-rating ${hide}`}>{displayRating(this.props.todo.rating)}</span>
        <button className={`edit-todo-btn Todo-btn ${hide}`} onClick={this.toggleEditForm}><i className="fas fa-pencil-alt"></i></button>
        <button className={`delete-todo-btn Todo-btn ${hide}`} onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
      </div>
    );
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