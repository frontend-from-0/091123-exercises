import React from "react";

export const Exercise7 = () => {
    function handleParentClick() {
        console.log("Parent clicked!");
    }

    function handleChildClick(event) {
        console.log("Child clicked!");
       // it stops the event 
        event.stopPropagation();
    }

    return (
        <div onClick={handleParentClick} style={{ padding: "20px", backgroundColor: "lightblue" }}>
            Parent Element
            <div 
                onClick={handleChildClick} 
                style={{ padding: "20px", backgroundColor: "lightcoral" }}>
                Child Element
            </div>
        </div>
    );
};
