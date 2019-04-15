import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, handleDeleteTodo, handleCompletedTodo }) => {
  return (
    <div id="todo-list">
      {
        todos.length>0 ? todos.map(todo =>
          <Todo todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
          />
        ) :
        <p>You have no todos</p>
      }
    </div>
  );
};

export default TodoList;