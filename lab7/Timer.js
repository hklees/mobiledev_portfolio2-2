import React, { useState } from "react";

//new functional component #1
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] =useState();

    function onOffSwith (){
        setIsActive(!isActive)
    }

    function reset () {
        setSeconds(0);
        setIsActive();
    }

    //if statement needs to go here
    if (isActive) {
        interval =setInterval() => {
            setSeconds(seconds => seconds +1);
        }, 1000); //1000= = 1 second
    } esle if (isActive & seconds !==0)
}

export default Timer;