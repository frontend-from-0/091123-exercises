import React, { useState } from "react";

export const Exercise5 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  const handleButtonClick = () => {
    if (!isTracking) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    setIsTracking(!isTracking);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isTracking ? "Stop" : "Start"}
      </button>
      <p>
        Mouse X: {coordinates.x}, Y: {coordinates.y}
      </p>
    </div>
  );
};
