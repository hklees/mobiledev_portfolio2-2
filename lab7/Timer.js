import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
//new functional component #1
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] =useState(true);
    
    function onOffSwitch (){
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
<Text style={styles.text}>testing {seconds} seconds</Text>
<div className="timediv">

    {/* <div className="time">
        {seconds} seconds
    </div> */}

    <div className="timeButtons">
        <Button title= "Pause/Play Timer" 
        className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
        onPress = {onOffSwitch}>
        </Button>
    </div>
</div>
</View>
);
};

const styles = StyleSheet.create ({
    timestyle: {
        backgroundColor: '#0000'
    },
    button: {

    },
    time: {
        fontSize: 25,
    },
    text: {
        fontSize: 25,
    }
})

export default Timer; StyleSheet;