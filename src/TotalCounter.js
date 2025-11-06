import React from "react";
 
export default function TotalCounter({ total, onReset }) {
  return (
    <>
      <div className="reset-btn" title="Resetar" onClick={onReset}>
        🔄
      </div>
      <div className="total fs-4 fw-bold mb-2">Total</div>
      <div className="total-box">{total}</div>
    </>
  );
}