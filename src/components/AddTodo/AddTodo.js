import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error : undefined
    }
  }

  /**
   * @desc function to pass input value to handleAddTodo
   * @param string $e - the input value
  **/
  onAdd = (e) => {
    e.preventDefault();

    const input = e.target.add.value.trim();

    const error = this.props.handleAddTodo(input);
    this.setState({ error });

    if (!error) {
      e.target.add.value = '';
    }
  }

  render() {
    return (
      <div id="add-todo">
        <form onSubmit={this.onAdd} id="add-todo-form">
          <input type="text" name="add" placeholder="add todo" required />
          <button>Add</button>
        </form>

        {this.state.error && <p class="error-msg">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddTodo;