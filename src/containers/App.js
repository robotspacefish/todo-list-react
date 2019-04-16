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
    if (input.length < 1) {
      return 'Todo cannot be blank';
    } else if (this.state.todos.indexOf(input) > -1) {
      return 'This todo already exists';
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, input]
    }));
  }

  /**
   * @desc function to remove a todo from the todos array
   * @param string $todoToDelete
  **/
  handleDeleteTodo = (todoToDelete, listType) => {
    // set list type to display
    const list = listType === 'active' ? this.state.todos : this.state.completedTodos;
    const newTodoList = list.filter(todo => {
      return todo !== todoToDelete;
    });
    listType === 'active' ? this.setState({ todos: [...newTodoList] }) :
      this.setState({ completedTodos: [...newTodoList] })

  }

  /**
   * @desc function to remove a todo from the todos array and add to completedTodos array
   * @param string $completedTodo
  **/
  handleCompletedTodo = (completedTodo, listType) => {
    // remove completed todo from todos
    this.handleDeleteTodo(completedTodo, listType);
    // add completed todo to completed todos
    if (listType ==='completed') {
      this.handlePutBackActiveTodo(completedTodo);
    } else {
      this.setState(prevState => ({
        completedTodos: [...prevState.completedTodos, completedTodo]
      }));
    }
  };

  /**
   * @desc function to remove a todo from the completed todos array and add to todos array
   * @param string $completedTodo
  **/
  handlePutBackActiveTodo = (completedTodo) => {
    console.log('putting back')
    this.setState(prevState => ({
      todos: [...prevState.todos, completedTodo]
    }));
  }

  render() {
    return (
      <div className="App">
        <AddTodo handleAddTodo={this.handleAddTodo} />

        <TodoList
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleCompletedTodo={this.handleCompletedTodo}
          listType="active"
        />
        <TodoList
          completedTodos={this.state.completedTodos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleCompletedTodo={this.handleCompletedTodo}
          listType="completed"
        />
      </div>
    );
  }
}

export default App;
