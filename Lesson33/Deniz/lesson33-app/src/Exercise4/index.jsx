import { useState } from "react";

export const Exercise4 = () => {
  const [items] = useState(["Apple", "Pear", "Banana", "Watermelon"]);

  const handleClick = (item) => {
    alert(`Clicked Item: ${item}`);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
