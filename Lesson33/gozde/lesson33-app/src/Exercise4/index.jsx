
import React from "react";

export const Exercise4 = () => {
    const items = ["Item 1", "Item 2", "Item 3"];

    function clickHandler(item) {
        alert(`You clicked: ${item}`);
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} onClick={() => clickHandler(item)}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
