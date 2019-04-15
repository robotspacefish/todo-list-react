import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, completedTodos, handleDeleteTodo, handleCompletedTodo, listType }) => {
  // set list type to display
  const list = listType === 'active' ? todos : completedTodos;
  return (
    <div id="todo-list">
      {listType === 'active' ? <h2>Todo List</h2> : <h2>Completed</h2>}
      {
        list.length>0 ? list.map(todo =>
          <Todo todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
            listType={listType}
            key={todo}
          />
        ) :
          listType === 'active' ? <p>You have no todos</p> : <p>You have no completed todos</p>
      }
    </div>
  );
};

export default TodoList;