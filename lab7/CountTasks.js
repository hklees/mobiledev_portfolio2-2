import React, { useState, useEffect } from 'react';

function CountTasks () {
    const [count, setcount] = useState(0);
    useEffect(() => {
      document.title = `You have completed ${count} task(s)!`;
    });
    return (
        <div>
            <p> You completed {count} tasks.</p>
        </div>
    )
  }

  export default CountTasks;