import React from "react";

export const Exercise7 = () => {
    
    function parentClickHandler() {
        console.log('Parent element clicked');
    };

    const childClickHandler = (e) => {
        console.log('Child element clicked');
        e.stopPropagation();
    }

    return (
            <div onClick={parentClickHandler} style={{border:"1px solid black", height:"500px", width:"700px"}}>Parent Component
                <div onClick={childClickHandler} style={{border:"1px solid black", height:"300px", width:"500px"}}>Child Component

                </div>
            </div>
    );
};
