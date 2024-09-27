import React, { useState } from "react";

export const ToDoList = () => {
    const [items, setItems] = useState([
        "Learn React",
        "Build a To-Do App",
        "Master JavaScript"
    ]);

    const handleRemove = (indexToRemove) => {
        setItems((prevItems) => 
            prevItems.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item} 
                    <button onClick={() => handleRemove(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};
