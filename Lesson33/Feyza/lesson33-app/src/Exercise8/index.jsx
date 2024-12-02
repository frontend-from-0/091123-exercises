import React, { useState } from "react";

export const Exercise8 = () => {
  const [items, setItems] = useState([
    "yellow",
    "green",
    "purple",
    "lightblue",
  ]);

  const handleRemove = (indexToRemove) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div>
      <h3>ToDo List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => handleRemove(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
