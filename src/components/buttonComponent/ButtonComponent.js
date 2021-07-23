import React, { useState } from "react";
import "./buttonComponent.css";

function ButtonComponent() {
    const [counter, setCounter] = useState(10); // should be 1 by default
    const maxValue = 25; // should be 1000 by default

    function handleCounter(e, type) {
        e.preventDefault();
        if (type === "increase") {
            if (counter + 1 <= maxValue) setCounter(counter + 1);
        } else if (type === "decrease") {
            setCounter(counter - 1);
        } else if (type === "custom") {
            if (e.target.valueAsNumber <= maxValue)
                setCounter(e.target.valueAsNumber);
        }
    }

    return (
        <div className="component-wrapper">
            Max value = {maxValue}
            <div className="button-wrapper">
                <button
                    className="counter-button counter-decrease"
                    onClick={(e) => handleCounter(e, "decrease")}
                >
                    -
                </button>
                <input
                    type="number"
                    className="counter-text"
                    value={counter}
                    max={maxValue}
                    onChange={(e) => handleCounter(e, "custom")}
                />
                <button
                    className="counter-button counter-increase"
                    onClick={(e) => handleCounter(e, "increase")}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ButtonComponent;
