import React, { Component } from 'react';
import './AddTodo.css';
import Rating from '../Rating/Rating';

class AddTodo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error : undefined,
      rating : 0,
      task : ''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
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

  handleChange(e) {
    this.setState({ task: e.target.value });
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
    this.loopThroughBangs(1, 'remove', 5);
  }

/**
 * @desc function to set the rating
 * @param number $rating - the rating value (1-5)
**/
  handleRating (rating) {
    if (rating > 0 && rating === this.state.rating) {
      // clear .rated class from all bangs
      this.loopThroughBangs(1, 'remove', 5);
      this.setState({ rating : 0 });
    } else {
      //set rating in state
      this.setState({ rating });

      // add .rated class to bangs <= rating
      this.loopThroughBangs(rating, 'add', 1);
      // clear .rated class from bangs >= rating
      this.loopThroughBangs(rating+1, 'remove', 5);
    }
  }

  loopThroughBangs (initValue, condition, conditionValue) {
    if (condition === 'remove') {
      for (let i = initValue; i <= conditionValue; i++) {
        const bang = document.getElementById(`rating-${i}`);
        bang.classList.remove('rated');
      }
    } else { // remove
      for (let i = initValue; i >= conditionValue; i--) {
        const bang = document.getElementById(`rating-${i}`);
        bang.classList.add('rated');
      }
    }
  }

  render() {
    return (
      <div id="add-todo">
        <form onSubmit={this.handleAddTodo} id="add-todo-form">
          <input
            type="text"
            name="add"
            placeholder="add todo"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <Rating handleRating={this.handleRating} />
          <button>Add</button>
        </form>

        {this.state.error && <p className="error-msg">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddTodo;