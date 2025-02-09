import React, { useState } from "react";

export const Exercise9 = () => {
  const [bgColor, setBgColor] = useState("");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{ backgroundColor: bgColor, padding: "20px", textAlign: "center" }}
    >
      <h3>Click a button to change background color</h3>
      <button
        onClick={() => handleColorChange("purple")}
        style={{ margin: "5px" }}
      >
        Purple
      </button>
      <button
        onClick={() => handleColorChange("lightblue")}
        style={{ margin: "5px" }}
      >
        Lightblue
      </button>
      <button
        onClick={() => handleColorChange("lightcoral")}
        style={{ margin: "5px" }}
      >
        Red
      </button>
      <button
        onClick={() => handleColorChange("yellow")}
        style={{ margin: "5px" }}
      >
        Yellow
      </button>
    </div>
  );
};
