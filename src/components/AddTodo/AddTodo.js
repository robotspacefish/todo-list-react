import React from 'react';
import './AddTodo.css';

const AddTodo = ({ handleAddTodo }) => {
  /**
   * @desc function to pass input value to handleAddTodo
   * @param string $e - the input value
  **/
  const onAdd = (e) => {
    e.preventDefault();
    const input = e.target.add.value.trim();
    handleAddTodo(input);
    e.target.add.value = '';
  }
  return (
    <form onSubmit={onAdd} id="add-todo-form">
      <input type="text" name="add" placeholder="add todo" required/>
      <button>Add</button>
    </form>
  );
};


export default AddTodo;