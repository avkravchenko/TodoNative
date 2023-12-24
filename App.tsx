import MyForm from "@/components/MyForm";
import MyTasks from "@/components/MyTasks";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import "react-native-get-random-values";
import store from "@/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView style={styles.container} behavior={"height"}>
        <MyTasks />
        <MyForm />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
