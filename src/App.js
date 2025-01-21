import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  /*-- lifting up state from <Form></Form> component */
  const [items, setItems] = useState([]);
  console.log("<App>: ", items);

  /* Handling add item to list */
  function handleAddItem(newItem) {
    setItems((curItem) => [...curItem, newItem]);
  }

  /* Handling delete item from list */
  function handleDeleteItem(itemId) {
    setItems((curItem) => curItem.filter((item) => item.id !== itemId));
  }

  /* Handling update item to list */
  function handleToggleItem(itemId) {
    setItems((curItem) =>
      curItem.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  /* Handling clear all items from list*/
  function handleAllClear() {
    const confirmed = window.confirm("Are you sure to clear your list? 🤔");
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onHandleClear={handleAllClear}
      />
      <Stats item={items} />
    </div>
  );
}

export default App;
