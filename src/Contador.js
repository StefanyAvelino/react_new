import React, { useState } from "react";
import "./Contador.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCounter from "./PersonCounter";
import TotalCounter from "./TotalCounter";
 
export default function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
 
  const total = homens + mulheres;
 
  const resetAll = () => {
    setHomens(0);
    setMulheres(0);
  };
 
  return (
    <div className="counter-container">
      <TotalCounter total={total} onReset={resetAll} />
 
      <div className="row">
        <PersonCounter
          label="Homens"
          imgUrl="https://img.icons8.com/ios-filled/100/000000/user-male-circle.png"
          count={homens}
          onIncrement={() => setHomens(homens + 1)}
          onDecrement={() => setHomens(Math.max(0, homens - 1))}
        />
        <PersonCounter
          label="Mulheres"
          imgUrl="https://img.icons8.com/ios-filled/100/000000/user-female-circle.png"
          count={mulheres}
          onIncrement={() => setMulheres(mulheres + 1)}
          onDecrement={() => setMulheres(Math.max(0, mulheres - 1))}
        />
      </div>
    </div>
  );
}