import React from 'react';

const Todo = ({ todo, handleDeleteTodo, handleCompletedTodo }) => {
  return (
    <div className="todo">
      {/* TODO outputting in an input element for future editing feature */ }
      {/* <button className="complete-todo-btn"></button> */}
      <input onClick={() => handleCompletedTodo(todo)} type="checkbox" name="complete" />
      <input type="text" value={todo} />
      <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
    </div>
  );
}


export default Todo;