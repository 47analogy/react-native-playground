import React from "react";

import { StyleSheet, View, Text } from "react-native";

const Todo = ({ todoItem }) => {
  return (
    <View style={styles.todoText}>
      <Text>{todoItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoText: {
    padding: 10,
    borderColor: "#000000",
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#add8e6",
  },
});

export default Todo;
