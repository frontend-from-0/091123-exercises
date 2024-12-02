import React from "react";

export const Exercise6 = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Default action prevented!");
  };
  return (
    <div>
      <a href="https://www.example.com" onClick={handleClick}>
        The link was clicked, but the default action was prevented.
      </a>
    </div>
  );
};
