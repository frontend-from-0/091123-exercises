// Exercise 9: Multiple Buttons
// Create a component with multiple buttons. Change the background color of the component based on which button is clicked.
    
import { useState } from "react";
  
export const Exercise9 = () => {
  const [bgColor, setBgColor] = useState('');

  const colors = ['red', 'blue', 'green'];

  function clickHandler(color) {
    setBgColor(color);
  }

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      {colors.map((color, index) => (
        <button 
          key={index} 
          onClick={() => clickHandler(color)} 
          style={{ margin: '5px' }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};