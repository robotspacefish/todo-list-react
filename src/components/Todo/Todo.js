import React from 'react';

const Todo = ({ todo, handleDeleteTodo, handleCompletedTodo, listType}) => {
  return (
    <div className="todo">
      {/* TODO outputting in an input element for future editing feature */ }

      <input onClick={() => handleCompletedTodo(todo, listType)} type="checkbox" name="complete" defaultChecked={listType === 'completed'}/>

      <input type="text" value={todo} />
      <button onClick={() => handleDeleteTodo(todo, listType)}>Delete</button>
    </div>
  );
}


export default Todo;