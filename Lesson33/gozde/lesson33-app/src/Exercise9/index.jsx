import { useState } from "react";

export const ColorChanger = () => {
    const [bgColor, setBgColor] = useState("");

    const handleColorChange = (color) => {
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: "20px", textAlign: "center" }}>
            <h2>Click a button to change background color</h2>
            <button onClick={() => handleColorChange("red")}>Red</button>
            <button onClick={() => handleColorChange("blue")}>Blue</button>
            <button onClick={() => handleColorChange("green")}>Green</button>
            <button onClick={() => handleColorChange("yellow")}>Yellow</button>
        </div>
    );
};
