import { useState } from "react";

export const Exercise5 = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [tracking, setTracking] = useState(false);

  const handleMouseMove = (e) => {
    if (tracking) {
      setCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleClick = () => {
    setTracking(true);
  };

  return (
    <div className="mouse-area" onMouseMove={handleMouseMove}>
      <button onClick={handleClick}>Start Tracking Mouse</button>
      {tracking && (
        <div className="coordinates">
          Current Coordinates: X - {coordinates.x}, Y - {coordinates.y}
        </div>
      )}
    </div>
  );
};
