import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoInputHandler = todoInput => {
    setNewTodo(todoInput);
  };

  const addNewTodoHandler = () => {
    setTodoList(currentTodos => [...currentTodos, newTodo]); // makes sure getting most current state
  };

  let todoIndex = 0;

  return (
    <View style={styles.screen}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Enter a todo"
          style={styles.input}
          onChangeText={addTodoInputHandler}
          value={newTodo}
        />
        <Button title="Add" onPress={addNewTodoHandler} />
      </View>
      <View>
        {todoList.map(todo => (
          <View style={styles.todoText} key={todoIndex++}>
            <Text>{todo}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: 200,
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10,
  },
  todoText: {
    padding: 10,
    borderColor: "#000000",
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#add8e6",
  },
});
