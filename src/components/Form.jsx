import React, { useState } from "react";

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    setDescription("");
    setQuantity(1);
    onAddItem(newItem);
  }

  function handleInputField(e) {
    setDescription(e.target.value);
  }

  function handleSelect(e) {
    setQuantity(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={quantity} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, item) => item + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleInputField}
      />

      <button>Add</button>
    </form>
  );
}

export default Form;

/*-- here we're lifting up state to first common parent component, that's <App></App> component
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((item) => [...item, newItem]);
    setItems([...items, item]);
  }
    */
