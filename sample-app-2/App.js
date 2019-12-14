import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import Todo from "./components/Todo";
import TodoInput from "./components/TodoInputs";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodoHandler = todo => {
    // makes sure getting most current state
    setTodoList(currentTodos => [
      ...currentTodos,
      { id: Math.random().toString(), value: todo },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View>
        <TodoInput addNewTodoHandler={addNewTodoHandler} />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={todoList}
          renderItem={todoItems => <Todo todoItem={todoItems.item.value} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
