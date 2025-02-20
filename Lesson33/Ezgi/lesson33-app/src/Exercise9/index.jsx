import React, { useState } from "react";

export const Exercise9 = () => {
   
    const [bgColor, setBgColor] = useState("lightgrey");

    const changeColor = (color) => {
        setBgColor(color);
    };

    return (
       <div style={{ backgroundColor: bgColor, height:"300px", width:"500px"}}>
         <button onClick={() => changeColor("yellow")}>Change the color Yellow</button>
        <button onClick={() => changeColor("orange")}>Change the color Orange</button>
        <button onClick={() => changeColor("green")}>Change the color Green</button>
        <button onClick={() => changeColor("blue")}>Change the color Blue</button>
       </div>
    )
}
