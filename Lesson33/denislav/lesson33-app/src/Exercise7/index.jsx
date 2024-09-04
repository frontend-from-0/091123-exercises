import React, { useState } from "react";

export const Exercise7 = () => {
  const [message, setMessage] = useState(""); // State değişkeni tanımlama

  const handleParentClick = () => {
    console.log("Parent element clicked");
    setMessage("Parent div clicked"); // Mesajı güncelleme
  };

  const handleChildClick = (e) => {
    console.log("Child element clicked");
    e.stopPropagation(); // Olayın yayılmasını durdurur
    setMessage("Child div clicked"); // Mesajı güncelleme
  };

  return (
    <div className="div-parent" onClick={handleParentClick}>
      Parent Element
      <div className="div-child" onClick={handleChildClick}>
        Child Element
      </div>
      {/* Mesajı ekranda göstermek için */}
      {message && <p>{message}</p>}
    </div>
  );
};
