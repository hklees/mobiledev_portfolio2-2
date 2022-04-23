import React, { useEffect, useState } from 'react';

//new functional component #1
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] =useState(true);

    function onOffSwith (){
        setIsActive(!isActive)
    }

    function reset () {
        setSeconds(0);
        setIsActive();
    }

    //if statement needs to go here
    useEffect(() => {
        let interval = null;
    if (isActive) {
        interval =setInterval(() => {
            setSeconds(seconds => seconds +1);
        }, 1000); //1000= = 1 second
    } else if (isActive & seconds !==0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isActive, seconds]);

return (
<div className="timediv">

    <div className="time">
        {seconds}s
    </div>

    <div className="timeButtons">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick = {onOffSwith}>
            Reset
        </button>
    </div>
</div>
);
};
export default Timer;