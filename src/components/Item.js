import React from 'react';
import '../styles/Item.scss';
import { AiFillDelete } from 'react-icons/ai';

//le paso las props en un objeto:
function Item({ id, text, bought, buyItem, deleteItem }) {
  return (
    <div className={bought ? 'item-container bought' : 'item-container'}>
      <div className="item-text" onClick={() => buyItem(id)}>
        {text}
      </div>
      <div className="item-container-icons" onClick={() => deleteItem(id)}>
        <AiFillDelete className="delete-icon" />
      </div>
    </div>
  );
}

export default Item;
