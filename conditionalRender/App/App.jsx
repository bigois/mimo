import React from 'react';
import {useState} from "react";

const App = () => {
    const message1 = <h1>ZOOM IN</h1>
    const message2 = <h2>ZOOM OUT</h2>

    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    }

    let message3;
    if (counter % 2 === 0) {
        message3 = "even";
    } else {
        message3 = "odd";
    }

    return (
        <div>
            {counter % 2 === 0 ? message1: message2}
            <p>{message3}</p>
            <button onClick={handleClick}>INCREASE COUNTER</button>
        </div>
    )
};

export default App;