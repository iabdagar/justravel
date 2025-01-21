import React, { useState } from "react";
import Item from "./Item";

function PackingList({ item, onDeleteItem, onToggleItem, onHandleClear }) {
  // console.log("<PackingList>: ", item); //--array

  const [sortBy, setSortBy] = useState("input");

  function handleSortBy(sort) {
    setSortBy(sort);
  }

  let sortedItem;

  if (sortBy === "input") sortedItem = item;
  if (sortBy === "description")
    sortedItem = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onHandleClear}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;

/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Jeans", quantity: 5, packed: true },
  { id: 4, description: "Camera", quantity: 2, packed: false },
  { id: 5, description: "Chocolate", quantity: 12, packed: true },
  { id: 6, description: "Sweater", quantity: 5, packed: false },
];
*/
