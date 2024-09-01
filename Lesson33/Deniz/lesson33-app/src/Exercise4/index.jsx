import { useState } from "react";

export const Exercise4 = () => {
  const [items] = useState(["Apple", "Pear", "Banana", "Watermelon"]);
  const [message, setMessage] = useState("");

  const handleClick = (item) => {
    if (message.length > 0) {
      setMessage("");
    } else {
      setMessage("Clicked!");
      console.log("clicked");
    }
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
      <p> {message}</p>
    </div>
  );
};
