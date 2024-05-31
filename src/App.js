import React, { useState } from "react";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import AddItemForm from "./components/AddItemForm";
import ConfirmationModal from "./components/ConfirmationModal";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), ...item }]);
  };

  const openModal = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const deleteItem = () => {
    setItems(items.filter((item) => item.id !== itemToDelete.id));
    closeModal();
  };

  return (
    <div className="App">
      <Header />
      <AddItemForm addItem={addItem} />
      <ShoppingList items={items} openModal={openModal} />
      <ConfirmationModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        confirmAction={deleteItem}
      />
    </div>
  );
};

export default App;
