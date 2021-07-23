import React, { useState } from "react";
import "./buttonComponent.css";
import {
    INITIAL_VALUE,
    MAX_VALUE_CONSTANT,
    COUNTER_INCREASE,
    COUNTER_DECREASE,
    COUNTER_CUSTOM,
} from "./../../constants.js";

function ButtonComponent() {
    const [counter, setCounter] = useState(INITIAL_VALUE ?? 1);
    const MAX_VALUE = MAX_VALUE_CONSTANT ?? 1000;

    // this handles the changes to the counter
    function handleCounter(e, type) {
        e.preventDefault();
        if (type === COUNTER_INCREASE) {
            // checks that counter is not increased to more than max value
            if (counter + 1 <= MAX_VALUE) setCounter(counter + 1);
        } else if (type === COUNTER_DECREASE) {
            setCounter(counter - 1);
        } else if (type === COUNTER_CUSTOM) {
            // checks that the value entered by user is not more than max value
            if (isNaN(e.target.valueAsNumber)) {
                setCounter(0);
            } else if (e.target.valueAsNumber <= MAX_VALUE)
                setCounter(e.target.valueAsNumber);
        }
    }

    const handleFocus = (event) => event.target.select();

    return (
        <div className="component-wrapper">
            Max value = {MAX_VALUE}
            <div className="button-wrapper">
                <button
                    className="counter-button counter-decrease"
                    onClick={(e) => handleCounter(e, COUNTER_DECREASE)}
                >
                    -
                </button>
                <input
                    type="number"
                    className="counter-text"
                    value={counter}
                    max={MAX_VALUE}
                    onChange={(e) => handleCounter(e, COUNTER_CUSTOM)}
                    onFocus={handleFocus}
                />
                <button
                    className="counter-button counter-increase"
                    onClick={(e) => handleCounter(e, COUNTER_INCREASE)}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ButtonComponent;
