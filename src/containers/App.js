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
   * @params string $input - the todo text entered
   *         int $rating - the urgency rating of the todo
  **/
  handleAddTodo = (input, rating) => {
    if (input.length < 1) {
      return 'Todo cannot be blank';
    } else if (this.state.todos.indexOf(input) > -1) {
      return 'This todo already exists';
    }

    const todo = {
      todo : input,
      rating : rating
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  }

  /**
   * @desc function to remove a todo from the array provided
   * @param string $todoToDelete - the todo to remove
   * @param array $list - the list to remove the todo from
  **/
  deleteTodo = (todoToDelete, list) => (
    list.filter(todo => todo !== todoToDelete)
  );

  /**
   * @desc function to handle setting the list and todo to remove
   * @param string $todoToDelete - the todo to remove
   * @param string listType - 'active' or 'completed'
  **/
  handleDeleteTodo = (todoToDelete, listType) => {
    // set list type to display
    const list = listType === 'active'
      ? this.state.todos : this.state.completedTodos;

    const newTodoList = this.deleteTodo(todoToDelete, list);

    listType === 'active'
      ? this.setState({ todos: [...newTodoList] })
      : this.setState({ completedTodos: [...newTodoList] });
  }

  /**
   * @desc function to remove a todo from the todos array and add to completedTodos array
   * @params string $completedTodo - the todo to move to the completed array
   *         string $listType - if the type of list to push to is 'completed' or 'active'
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

  /**
   * @desc function to delete all completed todos from completedTodos array
  **/
  handleDeleteAllCompleted = () => this.setState( { completedTodos : [] });

  render() {
    const totalActive = this.state.todos ? this.state.todos.length : 0;
    return (
      <div className="App">
        <p id="active-remaining-todos">Things To Do: <span>{totalActive}</span></p>

        <AddTodo handleAddTodo={this.handleAddTodo} />

        <TodoList
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleCompletedTodo={this.handleCompletedTodo}
          listType="active"
        />

        {
          this.state.completedTodos.length > 0 &&
            <button id="delete-all-completed"
              onClick={this.handleDeleteAllCompleted}>Delete All Completed
            </button>
        }

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
