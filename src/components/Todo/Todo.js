import React from 'react';
import './Todo.css';

const Todo = ({ todo, handleDeleteTodo, handleCompletedTodo, listType}) => {
  const displayRating = (times) => '! '.repeat(times);

  return (
    <div className={`${listType}-item todo`}>
      {/* TODO outputting in an input element for future editing feature */ }

      <input onClick={() => handleCompletedTodo(todo, listType)} type="checkbox" className="completed-btn" name="complete" defaultChecked={listType === 'completed'}/>

      <p className="todo-txt">{todo.todo}</p>
      <span className="urgency-rating">{displayRating(todo.rating)}</span>
      <button className="delete-todo-btn" onClick={() => handleDeleteTodo(todo, listType)}>Delete</button>
    </div>
  );
}


export default Todo;