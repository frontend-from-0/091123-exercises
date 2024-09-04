import React, { useState } from "react";

export const Exercise9 = () => {
  const [colorClass, setColorClass] = useState("");

  const handleColorChange = (color) => {
    // Arka plan rengini değiştiren sınıfı güncelle
    setColorClass(`${color}-background`);
  };

  return (
    <div className={`color-changer ${colorClass}`}>
      <h2>Choose a background color:</h2>
      <button onClick={() => handleColorChange("red")}>Red</button>
      <button onClick={() => handleColorChange("green")}>Green</button>
      <button onClick={() => handleColorChange("blue")}>Blue</button>
      <button onClick={() => handleColorChange("yellow")}>Yellow</button>
    </div>
  );
};
