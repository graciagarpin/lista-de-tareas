import React, { useState, useEffect } from 'react';
import ButtonIncrement from './ButtonIncrement';
import DisplayQuantity from './DisplayQuantity';
import ButtonDecrement from './ButtonDecrement';

function SelectQuantity(props) {
  const [counter, setCounter] = useState(1);
  let incrementCounter = (ev) => {
    
    ev.preventDefault();
    setCounter(counter + 1);
  };
  let decrementCounter = (ev) => {
    ev.preventDefault();
    setCounter(counter - 1);
  };
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  useEffect(() => {
    props.handleSelectUnitsChange(counter);
  }, [counter, props]);

  return (
    <div>
      {/* como estaba:
      <ButtonDecrement onClickFunc={decrementCounter} /> */}

      <ButtonDecrement decrementCounter={decrementCounter} />
      <DisplayQuantity counter={counter} />
      <ButtonIncrement incrementCounter={incrementCounter} />
    </div>
  );
}

export default SelectQuantity;
