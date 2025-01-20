import { registerRootComponent } from "expo";
import { store } from "./store";
import { Provider } from "react-redux";
import Navigation from "./navigation";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
export default App;
registerRootComponent(App);
