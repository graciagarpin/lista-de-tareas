import React, { useState, useEffect } from 'react';
import ButtonIncrement from './ButtonIncrement';
import DisplayQuantity from './DisplayQuantity';
import ButtonDecrement from './ButtonDecrement';

function SelectQuantity(props) {
  const [counter, setCounter] = useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  useEffect(() => {
    props.handleSelectUnitsChange(counter);
  }, [counter]);
  return (
    <div>
      <ButtonDecrement onClickFunc={decrementCounter} />
      <DisplayQuantity counter={counter} />
      <ButtonIncrement onClickFunc={incrementCounter} />
    </div>
  );
}

export default SelectQuantity;
