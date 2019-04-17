import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ todos, completedTodos, handleDeleteTodo, handleCompletedTodo, listType }) => {

  /**
   * @desc function to sort the active todos by their urgency rating
   * @param array $todos - the array of active todos
   * @return sorted array
  **/
  const sortActiveTodos = (todos) => [...todos].sort((a, b) => b.rating - a.rating);

  // set list type to display
  const list = listType === 'active' ? sortActiveTodos(todos) : completedTodos;

  return (
    <div id={`${listType}-list`} className="todo-list">
      {
        list.length>0 ? list.map(todo =>
          <Todo todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
            listType={listType}
            key={todo.todo}
          />
        ) :
          listType === 'active' ? <p>You have no todos</p> : null
      }
    </div>
  );
};

export default TodoList;