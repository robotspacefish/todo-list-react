import React from 'react';
import './Todo.css';

const Todo = ({ todo, handleDeleteTodo, handleCompletedTodoToggle, listType}) => {
  const displayRating = (times) => '! '.repeat(times);

  return (
    <div className="todo">
      <input onClick={() => handleCompletedTodoToggle(todo)} type="checkbox" className="completed-btn" name="complete" defaultChecked={listType === 'completed'}/>

      <p className="todo-txt">{todo.todo}</p>
      <span className="urgency-rating">{displayRating(todo.rating)}</span>
      <button className="delete-todo-btn" onClick={() => handleDeleteTodo(todo, listType)}>Delete</button>
    </div>
  );
}


export default Todo;