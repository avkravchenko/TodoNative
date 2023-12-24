import { StyleSheet, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/store/taskSlice";
import { changeEditedTodo } from "@/store/taskSlice";
import { toggleMode } from "@/store/taskSlice";
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "@/store";

type Props = {};

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isEdit: boolean;
}

type FormData = {
  taskName: string;
};

const MyForm = (props: Props) => {
  const mode = useSelector((state: RootState) => state.todoReducer.mode);
  const editTodo =
    useSelector((state: RootState) =>
      state.todoReducer.list.find((todo: Todo) => todo.isEdit === true)
    ) ?? null;

  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (mode === "create") {
      const todo = {
        id: uuidv4(),
        text: data.taskName,
        completed: false,
        isEdit: false,
      };
      dispatch(addTodo(todo));
      reset();
    } else if (mode === "edit" && editTodo) {
      const editedTodo = { ...editTodo, text: data.taskName };
      dispatch(changeEditedTodo(editedTodo));
      dispatch(toggleMode("create"));
      reset();
    }
  };

  return (
    <View style={styles.container}>
      <MyInput
        editValue={editTodo}
        mode={mode}
        name="userTask"
        control={control}
        rules={{ required: "Task is required" }}
      />

      <MyButton
        onPress={handleSubmit(onSubmit)}
        text={mode === "edit" ? "edit" : "add task"}
      />
    </View>
  );
};

export default MyForm;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#030002",
    padding: 10,
    zIndex: 1,
    bottom: 0,
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginBottom: 10,
  },
});
