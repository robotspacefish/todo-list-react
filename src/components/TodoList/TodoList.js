import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ todos, completedTodos, handleDeleteTodo, handleCompletedTodo, listType }) => {
  // set list type to display
  const list = listType === 'active' ? todos : completedTodos;
  return (
    <div id={`${listType}-list`} className="todo-list">
      {
        list.length>0 ? list.map(todo =>
          <Todo todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
            listType={listType}
            key={todo}
          />
        ) :
          listType === 'active' ? <p>You have no todos</p> : null
      }
    </div>
  );
};

export default TodoList;