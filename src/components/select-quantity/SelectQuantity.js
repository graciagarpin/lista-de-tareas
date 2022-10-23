import React, { useState } from 'react';
import ButtonIncrement from './ButtonIncrement';
import DisplayQuantity from './DisplayQuantity';
import ButtonDecrement from './ButtonDecrement';

function SelectQuantity () {
  const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <div> 
      <ButtonDecrement onClickFunc={decrementCounter}/>
      <DisplayQuantity message={counter}/> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
    </div>
  );
}

export default SelectQuantity;