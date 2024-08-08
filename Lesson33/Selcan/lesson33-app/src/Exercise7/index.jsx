// Exercise 7: Event Propagation
// Nest a child element within a parent element. Attach click event handlers to both elements, and observe the order in which the click events are triggered.
    
import { useState } from "react";

export const Exercise7 = () => {
  const [parentClicked, setParentClicked] = useState(false);
  const [childClicked, setChildClicked] = useState(false);

  const parentClickHandler = () =>{
   setParentClicked(true);
   setTimeout(()=>setParentClicked(false),2000);
  }; 
  const childClickedHandler=(event)=>{
    event.stopPropagation();
    setChildClicked(true);
    setTimeout(()=>setChildClicked(false),2000);
  };

  return (
    
    <div
   onClick={parentClickHandler}
   style={{cursor: 'pointer'}}> Parent Element
   
   {parentClicked && <p>Parent  element clicked.</p>}
    
     <div
     onClick={childClickedHandler}
     style={{cursor: 'pointer'}}>Child Element
     
     {childClicked && <p>Child element clicked.</p>}
     </div>
     </div>
    
  );
};