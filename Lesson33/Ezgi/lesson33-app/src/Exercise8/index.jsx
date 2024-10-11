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

    const deletekHandler = (removeToIndex) => {
       const newList =listItems.filter((item,index) => index !== removeToIndex) 
       setItems(newList);
    }


    return (
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    {item} 
                    <button onClick={() => deletekHandler(index)}>Delete</button>
                </li>

            ))}

        </ul>
    );
}
