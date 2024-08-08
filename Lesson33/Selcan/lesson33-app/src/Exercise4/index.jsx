// Exercise 4: Event Handler with Parameters
// Create a list of items. When a list item is clicked, display an alert showing the text of the clicked item.
    
import { useState } from "react";

export const Exercise4 = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  function clickHandler(item) {
    alert(`You clicked ${item}`);
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <button onClick={() => clickHandler(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};