import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
  console.log("<Item>: ", item);

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;

/**
 
function Stats({ item }) {
  const numOfItem = item.length;
  const packedItem = item.filter((item) => item.packed).length;
  const packedPercentage = item.length
    ? Math.trunc((packedItem / numOfItem) * 100)
    : 0;

  return (
    <div className="stats">
      {item.length === 0 ? (
        <p>Start you're packing</p>
      ) : packedPercentage === 100 ? (
        <p>All packed...👍 You're ready to go! 🛩️</p>
      ) : (
        <p>
          You have {numOfItem} items on your list, and you already packed{" "}
          {packedItem} ({packedPercentage}%)
        </p>
      )}
    </div>
  );
}

 */
