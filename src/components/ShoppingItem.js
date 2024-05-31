import React from "react";

const ShoppingItem = ({ item, openModal }) => {
  return (
    <li className="item">
      <span>
        {item.name} - {item.quantity}
      </span>
      <button onClick={() => openModal(item)}>Delete</button>
    </li>
  );
};

export default ShoppingItem;
