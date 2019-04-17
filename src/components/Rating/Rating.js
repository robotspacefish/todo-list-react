import React from 'react';
import './Rating.css';

const Rating = ({ handleRating }) => {
  return (
    <div id="ratings">
      <button onClick={() => handleRating(5)} className="rating" id="rating-1">!</button>
      <button onClick={() => handleRating(4)} className="rating" id="rating-2">!</button>
      <button onClick={() => handleRating(3)} className="rating" id="rating-3">!</button>
      <button onClick={() => handleRating(2)} className="rating" id="rating-4">!</button>
      <button onClick={() => handleRating(1)} className="rating" id="rating-5">!</button>
    </div>
  );
};

export default Rating;