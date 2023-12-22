import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

type Props = {
  name: string;
  control: any;
  rules: {
    required: string;
  };
};

const MyInput = ({ control, rules }: Props) => {
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
              placeholder="write what you want to do"
              style={styles.myInput}
            />
          </View>
        </>
      )}
    />

    // <View>
    //   <TextInput
    //     placeholder="write what you want to do"
    //     style={styles.myInput}
    //   />
    // </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  myInput: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "lightgrey",
  },
});
