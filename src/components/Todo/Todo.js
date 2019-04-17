import React from 'react';
import './Todo.css';

const Todo = ({ todo, handleDeleteTodo, handleCompletedTodo, listType}) => {
  const displayRating = () => <span>!</span>;

  let exclamations = null;

  for (let i = 0; i < todo.rating; i++) {
    exclamations.push(displayRating)
  }

  return (
    <div className={`${listType}-item todo`}>
      {/* TODO outputting in an input element for future editing feature */ }

      <input onClick={() => handleCompletedTodo(todo, listType)} type="checkbox" className="completed-btn" name="complete" defaultChecked={listType === 'completed'}/>

      <p className="todo-txt">{todo.todo}</p>
      {displayRating}
      <button className="delete-todo-btn" onClick={() => handleDeleteTodo(todo, listType)}>Delete</button>
    </div>
  );
}


export default Todo;