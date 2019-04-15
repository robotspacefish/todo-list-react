import React from 'react';

const Todo = ({ todo, handleDeleteTodo }) => {
  return (
    <div className="todo">
      {/* TODO outputting in an input element for future editing feature */ }
      <input type="text" value={todo} />
      <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
    </div>
  );
}


export default Todo;