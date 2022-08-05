import React from 'react';
import '../styles/Item.scss';
import { AiFillDelete } from 'react-icons/ai';

//le paso las props en un objeto:
function Item({ id, data, bought, buyItem, deleteItem }) {
  return (
    <div className={bought ? 'item-container bought' : 'item-container'}>
      <div className="item-data" onClick={() => buyItem(id)}>
        {data}
      </div>
      <div className="item-container-icons" onClick={() => deleteItem(id)}>
        <AiFillDelete className="delete-icon" />
      </div>
    </div>
  );
}

export default Item;
