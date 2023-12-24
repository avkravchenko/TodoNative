import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = {
  text: String;
  onPress: () => void;
};

const MyButton = ({ text, onPress }: Props) => {
  return (
    <View>
      <Pressable>
        <Text onPress={onPress} style={styles.button}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#25b08b",
    color: "#fff",
    padding: 15,
    borderRadius: 15,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "center",
  },
});
