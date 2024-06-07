import React from "react";
import Item from "./ShoppingItem";

const ShoppingList = ({ items, openModal }) => {
  return (
    <div className="shopping-list">
      {items.length === 0 ? (
        <p>Silakan masukan daftar belanjaan.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} openModal={openModal} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
