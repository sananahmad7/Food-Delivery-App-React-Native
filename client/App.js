import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css";

function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-red-500 text-4xl">Code with sanan ahmad ok</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
registerRootComponent(App);
