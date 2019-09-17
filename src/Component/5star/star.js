import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function SimpleRating() {
  return (
    <div>
      <Rating name="half-rating"  value={3} precision={0.5} />
    </div>
  );
}