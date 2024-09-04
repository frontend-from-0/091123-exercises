import { useState } from "react";

export const Exercise8 = () => {
  const [listItems, setListItems] = useState([
    "Apple",
    "Pear",
    "Banana",
    "Watermelon",
  ]);

  // Belirli bir öğeyi kaldıran fonksiyon
  const handleRemoveItem = (index) => {
    // Belirtilen öğeyi listeden kaldırmak için filter kullanıyoruz
    const newItems = listItems.filter((_, i) => i !== index);
    setListItems(newItems);
  };

  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleRemoveItem(index)}>Sil</button>
        </li>
      ))}
    </ul>
  );
};
