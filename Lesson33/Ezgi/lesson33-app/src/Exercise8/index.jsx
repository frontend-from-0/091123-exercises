import React, { useState } from "react";

export const Exercise8 = () => {
    const [listItems, setItems] = useState(
        [
            "Finish homeworks",
            "Go to Market",
            "Gym after work",
            "Meeting Friends"
        ]
    )

    const deleteHandler = (indexToRemove) => {
       const newList =listItems.filter((item,index) => index !== indexToRemove) 
       setItems(newList);
    }


    return (
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    {item} 
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                </li>

            ))}

        </ul>
    );
}
