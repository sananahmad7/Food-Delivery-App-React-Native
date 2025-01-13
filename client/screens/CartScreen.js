import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constants/index.js";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const CartScreen = () => {
  const navigation = useNavigation();
  // const restaurants = featured.restaurants[0];
  console.log(featured);
  return (
    <View className="bg-white flex-1">
      {/*Back Button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10  rounded-full p-1 shadow top-7 left-4"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
