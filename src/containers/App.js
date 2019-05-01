import React, { Component } from 'react';
import './App.css';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active : [],
      completed : []
    };
    this.handleDeleteAllCompleted = this.handleDeleteAllCompleted.bind(this);
  }

  componentDidMount() {
    try {
      const active = JSON.parse(localStorage.getItem('active'));
      const completed = JSON.parse(localStorage.getItem('completed'));
      if (active) { this.setState(() => ({ active })) }

      if (completed) { this.setState(() => ({ completed })) }
    } catch (e) {
      console.error(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // update active state if different
    if (prevState.active.length !== this.state.active.length) {
      localStorage.setItem('active', JSON.stringify(this.state.active));
    }
    // update completed state if different
    if (prevState.completed.length !== this.state.completed.length) {
      localStorage.setItem('completed', JSON.stringify(this.state.completed));
    }
  }

  /**
   * @desc function to add a todo from input to the todos array
   * @params string $input - the todo text entered
   *         int $rating - the urgency rating of the todo
  **/
  addTodoFromForm = (input, rating) => {
    const error = this.checkForInvalidInput(input);
    if (error !== undefined) {
      return error;
    }
    this.addTodoToList('active', this.setTodoParams(input, rating) )
  }

  setTodoParams = (input, rating) => ({
    todo: input,
    rating: rating,
    isCompleted: false,
    key: this.createKey(input)
  });

  addTodoToList(listType, todo) {
    this.setState(prevState => (
      { [listType]: [...prevState[listType], todo] }
    ))
  }

  /**
  * @desc function to make sure some input was entered and it doesn't
  *    already exist in active or completed todos
  * @params string $input - the todo text entered
  **/
  checkForInvalidInput = input => {
    if (input.length < 1) {
      return 'Todo cannot be blank';
    } else if (this.state.active.filter(todo => todo.todo.toLowerCase() === input.toLowerCase()).length > 0) {
      return 'This todo already exists';
    } else if (this.state.completed.filter(todo => todo.todo.toLowerCase() === input.toLowerCase()).length > 0 ) {
      return 'This todo already exists as Completed. Uncheck it to move it up to your Active todos, or delete it and recreate it.';
    }
  };

  /**
   * @desc function to create a key based on todo text
   * @param string $input - the todo to create a key from
  **/
  createKey = input => input.toLowerCase().split(' ').join('_');

  /**
   * @desc function to set the list and remove todo
   * @param string $todoToDelete - the todo to remove
   * @param string listType - 'active' or 'completed'
  **/
  deleteTodo = (todoToDelete, listType) => {
    this.setState({ [listType]: this.state[listType].filter(todo => {
      return todo !== todoToDelete;
    })  });
  }

  /**
   * @desc function to remove a todo from the todos array and add to completedTodos array
   * @params string $completedTodo - the todo to move to the completed array
   *         string $listType - if the type of list to push to is 'completed' or 'active'
  **/
  toggleTodo = (todo) => {
    this.toggleCompletedStatus(todo);

    let listToRemoveFrom = todo.isCompleted ? 'active' : 'completed';
    let listToAddTo = todo.isCompleted ? 'completed' : 'active';

    this.addTodoToList(listToAddTo, todo );
    this.setState({ [listToRemoveFrom]: this.state[listToRemoveFrom].filter(t => t !== todo) });
  };

  toggleCompletedStatus = (todo) => todo.isCompleted = !todo.isCompleted;

  /**
   * @desc function to delete all completed todos from completedTodos array
  **/
  handleDeleteAllCompleted () {
    this.setState({ completed: [] });
  }

  render() {
    const totalActive = this.state.active ? this.state.active.length : 0;
    return (
      <div className="App">
        <p id="active-remaining-todos">Things To Do: <span>{totalActive}</span></p>

        <AddTodo addTodo={this.addTodoFromForm} />

        <div className="App-lists">
          <TodoList
            todos={this.state.active}
            // handleDeleteTodo={this.handleDeleteTodo}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            listType="active"
          />

          {
            this.state.completed.length > 0 &&
            <button id="delete-all-completed"
              onClick={this.handleDeleteAllCompleted}>Delete All Completed
            </button>
          }

          <TodoList
            completedTodos={this.state.completed}
            deleteTodo={this.deleteTodo}
            toggleTodo={this.toggleTodo}
            listType="completed"
          />
        </div>

        <footer>
          <p>This app uses local storage to save your todos in your browser</p>
          <p> <a href="http://robotspacefish.dev/" target="_blank" rel="noopener noreferrer">robotspacefish!</a> 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
