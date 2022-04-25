import React, { useState } from 'react';
import { Button, Text } from 'react-native-elements';
import {StyleSheet} from 'react-native';

//new componet #3
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <Text style= {styles.text2}>Keep track of how many tasks you've compeleted </Text>
        {/* <p>Keep track of how many tasks you've compeleted</p> */}
        <Text style= {styles.text}># of Tasks Completed: {count} </Text>
        {/* <p> # of Tasks Completed: {count}</p> */}
        {/* Add button */}
        {/* <button onClick={() => setCount(prevCount => prevCount +1)}>Add (+)</button> */}
        <Button buttonStyle={{
                backgroundColor: '#006400',
                height: 40,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
            }}
            title= "Add (+)" onPress= {() => setCount(prevCount => prevCount +1)}></Button>
        {/* Subtract button */}
        {/* <button onClick={() => setCount(prevCount => prevCount -1)}>Subtract (-)</button> */}
        <Button buttonStyle={{
                backgroundColor: '#cd5c5c',
                height: 40,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
            }}
            title= "Subtract (-)" onPress= {() => setCount(prevCount => prevCount -1)}></Button>

        </>
    );
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 25,
        padding: 10,
        alignSelf: 'center',
    }, 
    text2: {
        fontSize: 20,
        padding: 10,
        alignSelf: 'center',
    }, 
});


export default Counter; StyleSheet