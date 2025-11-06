import React from "react";
 
export default function PersonCounter({ label, imgUrl, count, onIncrement, onDecrement }) {
  return (
    <div className="person text-center col">
      <img src={imgUrl} alt={label} width="60" className="mb-2" />
      <div className="my-3">
        <button className="btn btn-success btn-circle me-2" onClick={onIncrement}>
          +
        </button>
        <button className="btn btn-danger btn-circle" onClick={onDecrement}>
          −
        </button>
      </div>
      <div>{label}</div>
      <div className="count-box">{count}</div>
    </div>
  );
}