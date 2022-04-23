import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';

//new functional component #1
<View style={styles.timestyle}>

</View>
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] =useState(true);
    
    function onOffSwith (){
        setIsActive(!isActive)
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
        <View style={styles.timestyle}>
<div className="timediv">

    <div className="time">
        {seconds}s
    </div>

    <div className="timeButtons">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick = {onOffSwith}>
            Pause/Play Timer
        </button>
    </div>
</div>
</View>
);
};

const styles = StyleSheet.create ({
    timestyle: {
        backgroundColor: '#0000'
    }
})

export default Timer; StyleSheet;