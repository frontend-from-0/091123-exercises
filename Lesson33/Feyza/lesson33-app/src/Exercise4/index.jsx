import React from "react";
export const Exercise4 = () => {
  const items = ["blue", "green", "yellow", "purple"];

  const clickHandler = (itemText) => {
    alert(`Clicked on:"${itemText}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => clickHandler(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};
