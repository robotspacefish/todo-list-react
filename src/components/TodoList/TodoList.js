import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, handleDeleteTodo }) => {
  return (
    <div id="todo-list">
      {
        todos.length>0 ? todos.map(todo => <Todo todo={todo} handleDeleteTodo={handleDeleteTodo} />)
        :
        <p>You have no todos</p>
      }
    </div>
  );
};

export default TodoList;