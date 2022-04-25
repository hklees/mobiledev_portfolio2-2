import React, { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native-elements';

//new componet #3
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <Text ></Text>
        <p>Keep track of how many tasks you've compeleted</p>
        <p> # of Tasks Completed: {count}</p>
        {/* Add button */}
        {/* <button onClick={() => setCount(prevCount => prevCount +1)}>Add (+)</button> */}
        <Button title= "Add (+)" onPress= {() => setCount(prevCount => prevCount +1)}></Button>
        <br></br>
        {/* Subtract button */}
        {/* <button onClick={() => setCount(prevCount => prevCount -1)}>Subtract (-)</button> */}
        <Button title= "Subtract (-)" onPress= {() => setCount(prevCount => prevCount -1)}></Button>

        </>
    );
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 25,
        padding: 20,
        alignSelf: 'center',
    }, 
})


export default Counter; StyleSheet;