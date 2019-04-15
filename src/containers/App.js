import React, { Component } from 'react';
import './App.css';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [],
      completedTodos : []
    };
  }

  /**
   * @desc function to add a todo from input to the todos array
   * @param string $input
  **/
  handleAddTodo = (input) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, input]
    }));
  }

  /**
   * @desc function to remove a todo from the todos array
   * @param string $todoToDelete
  **/
  handleDeleteTodo = (todoToDelete) => {
    const newTodoList = this.state.todos.filter(todo => {
      return todo !== todoToDelete;
    });
    this.setState({ todos : [...newTodoList] });
  }

  /**
   * @desc function to remove a todo from the todos array and add to completedTodos array
   * @param string $completedTodo
  **/
  handleCompletedTodo = (completedTodo) => {
    // remove completed todo from todos
    this.handleDeleteTodo(completedTodo);
    // add completed todo to completed todos
    this.setState(prevState => ({
      completedTodos: [...prevState.completedTodos, completedTodo]
    }));
  };

  render() {
    return (
      <div className="App">
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <TodoList
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleCompletedTodo={this.handleCompletedTodo}
        />
      </div>
    );
  }
}

export default App;
