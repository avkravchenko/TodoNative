import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode, toggleTodo } from "@/store/taskSlice";
import { deleteTodo } from "@/store/taskSlice";
import { editTodo } from "@/store/taskSlice";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RootState } from "@/store";

type Props = {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
};

const MyTask = ({ item }: Props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.todoReducer.mode);

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    if (mode === "edit") {
      dispatch(toggleMode("create"));
    }
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id: string) => {
    dispatch(editTodo(id));
    dispatch(toggleMode("edit"));
  };

  return (
    <View style={styles.task}>
      <View style={styles.taskLeftSide}>
        <BouncyCheckbox
          isChecked={item.completed}
          fillColor="#0ba257"
          onPress={() => handleToggleTodo(item.id)}
        />
        <Text style={!item.completed ? styles.taskText : styles.doneTaskText}>
          {item.text}
        </Text>
      </View>
      <View style={styles.taskRightSide}>
        <Pressable onPress={() => handleEdit(item.id)}>
          <Text>✏️</Text>
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Text>🗑</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  taskLeftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskRightSide: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },

  taskText: {
    maxWidth: 250,
  },
  doneTaskText: {
    color: "grey",
  },
});
