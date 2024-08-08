// Exercise 6: Prevent Default
// Design a link inside a component. Implement an event handler that prevents the default action when the link is clicked.
    
import { useState } from "react";

export const Exercise6 = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler =(event) =>{
   event.preventDefault();
   setClicked(true);
  }; 

  return (
    <div>
   <a href="https://www.example.com" onClick={clickHandler}>Click me</a>
   
    {clicked && <p>The link was clicked, but the default action was prevented.</p>}
     </div>
  );
};