// Exercise 10: Double Click Event
// Implement an event handler that triggers when a button is double-clicked. Display an alert indicating that the button was double-clicked.
    
import { useState } from "react";

export const Exercise10 = () => {
  const [items, setItems] = useState(['Button1', 'Button2', 'Button3']);

  function clickHandler(item) {
    alert(`You doubleClicked ${item}`);
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <button onDoubleClick={() => clickHandler(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};