import React, { useState } from "react";

export const Exercise10 = () => {
  const [message, setMessage] = useState("");

  // Çift tıklama olayını işleyen fonksiyon
  const handleDoubleClick = () => {
    setMessage("Button was double-clicked!");
  };

  return (
    <div className="double-click-container">
      <button className="double-click-button" onDoubleClick={handleDoubleClick}>
        Double-Click Me!
      </button>
      {message && <p className="double-click-message">{message}</p>}
    </div>
  );
};
