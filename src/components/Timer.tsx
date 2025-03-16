import { useState, useEffect } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    let intervalId = null

    useEffect(() => {
        intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
            console.log("Running:", count);
        }, 2000);
        console.log('render', intervalId)

        return () => clearInterval(intervalId);
    }, [intervalId]);

    return <div>Count: {count}
        <button onClick={() => clearInterval(intervalId)}>
            clear
        </button>
    </div>;
}
