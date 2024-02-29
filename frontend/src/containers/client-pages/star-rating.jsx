import React, { useState } from 'react';

const StarRating = ({ maxStars, onStarClick }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onStarClick(value);
  };

  return (
    <div>
      {[...Array(maxStars).keys()].map((i) => (
        <span
          key={i}
          onClick={() => handleStarClick(i + 1)}
          style={{ cursor: 'pointer' }}
        >
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
