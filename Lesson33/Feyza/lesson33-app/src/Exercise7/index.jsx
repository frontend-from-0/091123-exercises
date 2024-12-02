import React from "react";

export const Exercise7 = () => {
  const handleParentClick = () => {
    console.log("Parent clicked!");
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child clicked!");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", backgroundColor: "#f3f3f3" }}
    >
      <p>Parent Element</p>
      <div
        onClick={handleChildClick}
        style={{ padding: "15px", backgroundColor: "#b0c4de" }}
      >
        Child Element
      </div>
    </div>
  );
};
