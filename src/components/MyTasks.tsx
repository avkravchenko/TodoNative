import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTodo } from "@/store/taskSlice";
import { deleteTodo } from "@/store/taskSlice";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MyTask from "./MyTask";

const MyTasks = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.list);

  const sortedTodos = useMemo(() => {
    const sorted = [...todos];
    sorted.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    });

    return sorted;
  }, [todos]);

  return (
    <View style={styles.myTasks}>
      <Text style={styles.header}>My to do list</Text>
      <FlatList
        data={sortedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MyTask item={item} />}
      />
    </View>
  );
};

export default MyTasks;

const styles = StyleSheet.create({
  myTasks: {
    marginTop: 50,
    width: "90%",
    backgroundColor: "#efefef",
    borderRadius: 15,
    padding: 10,
    gap: 10,
    maxHeight: 750,
    marginBottom: 120,
    zIndex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
