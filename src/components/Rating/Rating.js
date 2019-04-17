import React from 'react';
import './Rating.css';

const Rating = ({ handleRating }) => {
  return (
    <div id="ratings">
      <span onClick={() => handleRating(5)} className="rating" id="rating-5">!</span>
      <span onClick={() => handleRating(4)} className="rating" id="rating-4">!</span>
      <span onClick={() => handleRating(3)} className="rating" id="rating-3">!</span>
      <span onClick={() => handleRating(2)} className="rating" id="rating-2">!</span>
      <span onClick={() => handleRating(1)} className="rating" id="rating-1">!</span>
    </div>
  );
};

export default Rating;