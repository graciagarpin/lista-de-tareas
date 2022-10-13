import React, { useState } from 'react';

function SelectQuantity () {
  const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <div> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <DisplayQuantity message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  );
}