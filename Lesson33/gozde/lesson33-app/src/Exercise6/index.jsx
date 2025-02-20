import React from "react";

export const Exercise6 = () => {

    function clickHandler(event) {
        event.preventDefault();
        console.log("Default action prevented!");
    }

    return (
        <div>
            <a href="https://www.gozdehizir.com" onClick={clickHandler}>
                Click me, but I won't take you anywhere!
            </a>
        </div>
    );
};
