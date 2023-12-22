import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTodo } from "@/store/taskSlice";

type Props = {};

const MyTasks = (props: Props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.list);

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const uncompletedTodos = todos.filter((item) => !item.completed);

  return (
    <View style={styles.myTasks}>
      <Text style={styles.header}>My to do list</Text>
      <FlatList
        data={uncompletedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyTasks;

const styles = StyleSheet.create({
  myTasks: {
    marginTop: 50,
    width: "90%",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
