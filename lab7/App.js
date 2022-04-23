import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';
import Timer from './Timer';
export default function App() {
  let [inputText, setInputText] = useState("")
  let [tasks, setTasks] = useState([
    { description: "Task 1", key: "1", completed: true },
    { description: "Task 2", key: "2", completed: false },
    { description: "Task 3", key: "3", completed: false },
  ])
  let addTask = useCallback(() => {
    let keys = tasks.map(task => parseInt(task.key))
    console.log(maxKey)
    let maxKey = Math.max(...keys) + 1
    let newTask = { description: inputText, completed: false, key: maxKey.toString() }
    console.log(newTask)
    setTasks([...tasks, newTask])
    //setInputText("")
  }, [inputText])
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <p>Keep track of your time on tasks!</p>
      <Timer></Timer>
      <br></br>
        <Text style={styles.title}>TODO App</Text>
        <View styles={[{ height: 30, paddingBottom: 20 }, styles.input]}>
        <Input value={inputText} onChangeText={setInputText} style={{ height: 30, paddingBottom: 10 }}></Input>
        <Button title="Add" onPress={addTask}></Button>
        </View>
        <FlatList data={tasks} keyExtractor={(item) => item.key} renderItem={({ item: task }) =>
          <CheckBox onPress={() => {
            let curTask = tasks.find(t => t.key == task.key)
            curTask.completed = !curTask.completed
            setTasks([...tasks])
          }} title={task.description}
            checked={task.completed}
            textStyle={task.completed ? {
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid'
            } : undefined}
          ></CheckBox>
        } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
  },
  innerContainer: {
    maxWidth: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});