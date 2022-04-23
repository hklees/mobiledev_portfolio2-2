import React, { useState } from 'react';

function CountTasks () {
    const [count, setcount] = useState(0);
    useEffect(() => {
      document.title = `You have completed ${count} task(s)!`;
    });
  }

  export default CountTasks;