import React, { Component } from 'react';
import './AddTodoForm.css';
import Rating from '../Rating/Rating';
import { addRemoveClassesLoop } from '../../helpers';

class AddTodoForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error : undefined,
      rating : 0,
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.addRating = this.addRating.bind(this);
  }

  /**
   * @desc function to pass input value to addTodo
   * @param string $e - the input value
  **/
  handleAddTodo (e) {
    e.preventDefault();

    const input = e.target.add.value.trim();
    let error = null;

    // add todo and return error if todo was invalid
    error = this.props.addTodo(input, this.state.rating);
    this.setState({ error });
    this.clearAndReset(e);
  }

  addRating(rating) {
    this.setState({ rating })
  }

  /**
   * @desc function to clear and reset input rating and bangs
   * @param object $e - the input dom event
  **/
  clearAndReset (e) {
    // clear input field
    e.target.add.value = '';
    // reset rating
    this.setState({ rating: 0 });

    // clear .rated class from all bangs
    addRemoveClassesLoop(1, 'remove', 5, 'rating-', 'rated');

  }

  render() {
    return (
      <div id="add-todo">
        <form onSubmit={this.handleAddTodo} id="add-todo-form">
          <input
            type="text"
            name="add"
            placeholder="add todo"
          />
          <Rating addRating={this.addRating} />
          <button>Add</button>
        </form>

        {this.state.error && <p className="error-msg">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddTodoForm;