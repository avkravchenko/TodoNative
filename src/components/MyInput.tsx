import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isEdit: boolean;
}

type Props = {
  name: string;
  control: any;
  rules: {
    required: string;
  };
  mode: string;
  editValue: Todo | null;
};

const MyInput = ({ control, rules, mode, editValue }: Props) => {
  return (
    <Controller
      name="taskName"
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={
                mode === "edit" ? editValue?.text : "write what you want to do"
              }
              style={styles.myInput}
            />
          </View>
        </>
      )}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  myInput: {
    width: 280,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
    textDecorationLine: "none",
    backgroundColor: "white",
  },
});
