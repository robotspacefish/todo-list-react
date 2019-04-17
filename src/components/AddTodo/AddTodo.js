import React, { Component } from 'react';
import './AddTodo.css';
import Rating from '../Rating/Rating';

class AddTodo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error : undefined,
      rating : undefined
    }
  }

  /**
   * @desc function to pass input value to handleAddTodo
   * @param string $e - the input value
  **/
  onAdd = (e) => {
    e.preventDefault();

    const input = e.target.add.value.trim();
    let error = null;

    // add todo and return error if todo was invalid
    error = this.props.handleAddTodo(input, this.state.rating);
    this.setState({ error });

    // clear input field
    e.target.add.value = '';

    // reset rating
    this.setState({ rating : 0 });
  }

  handleRating = (rating) => {
    this.setState({ rating });

    // set bang color for rating level

  }

  render() {
    return (
      <div id="add-todo">
        <form onSubmit={this.onAdd} id="add-todo-form">
          <input onKeyPress={this.onKeyPress}
            type="text" name="add" placeholder="add todo" />
          <Rating handleRating={this.handleRating} />
          {/* <button>Add</button> */}
        </form>

        {this.state.error && <p className="error-msg">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddTodo;