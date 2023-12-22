import MyForm from "@/components/MyForm";
import MyTasks from "@/components/MyTasks";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import "react-native-get-random-values";
import store from "@/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MyTasks />
        <MyForm />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
});
