import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "@/store/taskSlice";
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import { v4 as uuidv4 } from "uuid";

type Props = {};

type FormData = {
  taskName: string;
};

const MyForm = (props: Props) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const todo = {
      id: uuidv4(),
      text: data.taskName,
      completed: false,
    };
    dispatch(addTodo(todo));
    console.log(todo);

    reset();
  };

  return (
    <View style={styles.container}>
      <MyInput
        name="username"
        control={control}
        rules={{ required: "Task is required" }}
      />

      <MyButton onPress={handleSubmit(onSubmit)} text={"add task"} />
    </View>
  );
};

export default MyForm;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
