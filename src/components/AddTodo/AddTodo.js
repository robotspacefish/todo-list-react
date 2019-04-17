import React, { Component } from 'react';
import './AddTodo.css';
import Rating from '../Rating/Rating';

class AddTodo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error : undefined,
      rating : undefined,
      enterKeyPressed : false
    }
  }

  /**
   * @desc function to pass input value to handleAddTodo
   * @param string $e - the input value
  **/
  onAdd = (e) => {
    e.preventDefault();

    const input = e.target.add.value.trim();
    let rating = this.state.enterKeyPressed ? 0 : this.state.rating;
    let error = null;

    if (this.state.enterKeyPressed) {
      this.toggleEnterKeyPressed();
    }

    if (input) {
      error = this.props.handleAddTodo(input, rating);
      this.setState({ error });
    }

    if (!error) {
      e.target.add.value = '';
    }
  }

  handleRating = (rating) => {
    this.setState({ rating });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.toggleEnterKeyPressed();
    }
  }

  toggleEnterKeyPressed = () => {
    this.setState({ enterKeyPressed: !this.state.enterKeyPressed });
  }

  render() {
    return (
      <div id="add-todo">
        <form onSubmit={this.onAdd} id="add-todo-form">
          <input onKeyPress={this.onKeyPress}
            type="text" name="add" placeholder="add todo" required />
          <Rating handleRating={this.handleRating} />
          {/* <button>Add</button> */}
        </form>

        {this.state.error && <p className="error-msg">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddTodo;