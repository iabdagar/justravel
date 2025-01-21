import React from "react";

function Stats({ item }) {
  if (!item.length) {
    return <footer className="stats">Start your packing 🧥</footer>;
  }

  const numOfItem = item.length;
  const packedItem = item.filter((item) => item.packed).length;
  const packedPercentage = item.length
    ? Math.trunc((packedItem / numOfItem) * 100)
    : 0;

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <p>All packed...👍 You're ready to go! 🛩️</p>
      ) : (
        <p>
          You have {numOfItem} items on your list, and you already packed{" "}
          {packedItem} ({packedPercentage}%)
        </p>
      )}
    </footer>
  );
}

export default Stats;

//
//
/*-- another way to write above code
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
