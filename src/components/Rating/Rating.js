import React, { Component } from 'react';
import './Rating.css';
import { addRemoveClassesLoop } from '../../helpers';

export default class Rating extends Component {
  static defaultProps = {
    maxRating : 5,
    minRating : 1,
    defaultRating : 0
  };
  constructor(props) {
    super(props);
    this.state = { rating: this.props.defaultRating };
  }
  /**
  * @desc function to set the rating
  * @param number $rating - the rating value (1-5)
  **/
  handleRating(rating) {
    let idPrefix = 'rating-';
    let className='rated';
    if (rating > 0 && rating === this.state.rating) {
      // clear .rated class from all bangs
      addRemoveClassesLoop(1, 'remove', this.props.maxRating, idPrefix, className );
      this.setState({ rating: this.props.defaultRating });
    } else {

      // pass rating to parent
      this.props.addRating(rating);

      // add .rated class to bangs <= rating
      addRemoveClassesLoop(rating, 'add', this.props.minRating, idPrefix, className);
      // clear .rated class from bangs >= rating
      addRemoveClassesLoop(rating + 1, 'remove', this.props.maxRating, idPrefix, className);
    }
  }

  render() {
    const bangs = () => {
      let bangs = [];
      for (let i = this.props.maxRating; i >= this.props.minRating; i--) {
        bangs.push(<span onClick={() => this.handleRating(i)} className="rating" key={`rating-${i}`} id={`rating-${i}`}>!</span>)
      }
      return bangs;
    };
    return (
      <div id="ratings">
        {bangs()}
      </div>
    )
  }
}