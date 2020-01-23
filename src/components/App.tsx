import React, { useState, useEffect } from 'react';

const INITIAL_VALUE = 0;

export default function Counter() {
  const [value, setValue] = useState(INITIAL_VALUE);

  function handleIncrement() {
    setValue(() => value + 1);
  }

  function handleDecrement() {
    setValue(() => value - 1);
  }

  function handleReset() {
    setValue(() => INITIAL_VALUE);
  }

  useEffect(() => {
    document.title = "Contador com hooks | REACT";
  })

  return (
    <div>
      <div>
        <h1>{value}</h1>
      </div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}