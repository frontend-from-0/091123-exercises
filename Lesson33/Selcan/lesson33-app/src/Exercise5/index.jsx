// Exercise 5: Mouse Coordinates
// Build a component that displays the current X and Y coordinates of the mouse when a button is clicked.
    
import { useState, useEffect } from "react";

export const Exercise5 = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [displayCoords, setDisplayCoords] = useState(false);

  useEffect(() => {
    function updateCoords(event) {
      setCoords({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", updateCoords);

    return () => {
      window.removeEventListener("mousemove", updateCoords);
    };
  }, []);

  function clickHandler() {
    setDisplayCoords(true);
  }

  return (
    <div>
      <button onClick={clickHandler}>Show Coordinates</button>
      {displayCoords && (
        <div>
          X: {coords.x}, Y: {coords.y}
        </div>
      )}
    </div>
  );
};