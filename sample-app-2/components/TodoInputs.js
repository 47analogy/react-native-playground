import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

const TodoInput = ({ addNewTodoHandler }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodoInputHandler = todoInput => {
    setNewTodo(todoInput);
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder="Enter a todo"
        style={styles.input}
        onChangeText={addTodoInputHandler}
        value={newTodo}
      />
      <Button title="Add" onPress={() => addNewTodoHandler(newTodo)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default TodoInput;
