import React from 'react';

const StarRating = () => {

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className='star filled'
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;