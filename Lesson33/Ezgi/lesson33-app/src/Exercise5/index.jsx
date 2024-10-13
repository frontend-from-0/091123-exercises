import { useState } from "react";

export const Exercise5 = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    function mouseClick(e) {
        setCoordinates({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            <button onClick={mouseClick}>Get Mouse Coordinates</button>
            <p> X: {coordinates.x}, Y: {coordinates.y}</p>
        </>
    );
};
