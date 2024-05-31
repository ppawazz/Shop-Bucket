import React from "react";
import Item from "./ShoppingItem";

const ShoppingList = ({ items, openModal }) => {
  return (
    <ul className="shopping-list">
      {items.map((item) => (
        <Item key={item.id} item={item} openModal={openModal} />
      ))}
    </ul>
  );
};

export default ShoppingList;
