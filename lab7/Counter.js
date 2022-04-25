import React, { useState } from 'react';
//new componet #3
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <p>Keep track of how many tasks you've compeleted</p>
        <p> # of Tasks Completed: {count}</p>
        {/* Add button */}
        <button onClick={() => setCount(prevCount => prevCount +1)}>Add (+)</button>
        {/* Subtract button */}
        <button onClick={() => setCount(prevCount => prevCount -1)}>Subtract (-)</button>
        </>
    );
}
