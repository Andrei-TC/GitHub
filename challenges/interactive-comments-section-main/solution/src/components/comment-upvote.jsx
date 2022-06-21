import React from "react";

const Upvote = ({ score }) => {
  return (
    <div className="user-action-rating flex">
      <button className="rating-plus rBtn">+</button>
      <p className="rating-points grid">{score}</p>
      <button className="rating-minus rBtn">-</button>
    </div>
  );
};

export default Upvote;
