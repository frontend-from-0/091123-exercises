import { useState } from "react";

export const Exercise10 = () => {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Double click me!");

  function handleDoubleClick() {
    setButtonText("The button has been double-clicked!");
    setMessage("Button was double-clicked!");
  }

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>{buttonText}</button>
      {message && (
        <div style={{ color: "red", marginTop: "10px" }}>{message}</div>
      )}
    </div>
  );
};
