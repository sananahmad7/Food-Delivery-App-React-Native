import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantScreen from "./screens/RestaurantScreen";
import React from "react";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
