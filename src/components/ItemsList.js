import React, { useState } from 'react';
import NewItemForm from './NewItemForm';
import '../styles/ItemsList.scss';
import Item from './Item';

function ItemsList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item.text.trim()) {
      item.text = item.text.trim();
      const updatedItems = [item, ...items];
      setItems(updatedItems);

      console.log(item);
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const buyItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        // !item.bought -> hacemos que si era falsa se vuelva verdadera y viceversa, será lo contrario a lo que reciba
        item.bought = !item.bought;
      }
      return item;
    });
    setItems(updatedItems);
  };
  //aplicar la clase scss bought

  return (
    <>
      <NewItemForm onSubmit={addItem} />
      <div className="items-list-container">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            text={item.text}
            bought={item.bought}
            deleteItem={deleteItem}
            buyItem={buyItem}
          />
        ))}
      </div>
    </>
  );
}

export default ItemsList;
