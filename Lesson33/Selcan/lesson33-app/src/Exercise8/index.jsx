//Exercise 8: Dynamic List Rendering (add these buttons to the existing todo list items in our application!)
// Render a list of items with buttons next to them. Clicking a button should remove the corresponding item from the list.
   
import { useState } from "react";

export const Exercise8 = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button 
              onClick={() => removeItem(index)} 
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


// import { useState } from "react";

// export const Exercise8 = () => {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

//   function clickHandler(item) {
//     ${item};
//   }

//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>
//           <button onClick={() => clickHandler(item)}>
//             {item}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };