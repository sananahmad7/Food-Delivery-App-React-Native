import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Navigation from "./navigation";

function App() {
  return <Navigation />;
}
export default App;
registerRootComponent(App);
