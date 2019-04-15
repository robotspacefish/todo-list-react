import React, { Component } from 'react';
import './App.css';
import AddTodo from '../components/AddTodo/AddTodo';

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

  render() {
    return (
      <div className="App">
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
