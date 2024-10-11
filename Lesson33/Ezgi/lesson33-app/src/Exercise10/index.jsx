import React, { useState } from "react";

export const Exercise10 = () => {
   
    const [clickCount, setClickCount] = useState(0);

    function doubleClickHandler () {
        setClickCount(clickCount + 1);

        if(clickCount === 2) {
            alert('Button was double-clicked!');
            setClickCount(0);
        }
    }
    return (
        <button onClick={doubleClickHandler}>Double click me</button>
    )

}

