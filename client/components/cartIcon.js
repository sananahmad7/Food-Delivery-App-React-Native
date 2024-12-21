import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColors } from "../theme";

const CartIcon = () => {
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full "
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <Text className="text-white font-extrabold text-lg">{3}</Text>
        </View>
        <Text className="flex-1 text-lg text-center font-extrabold text-white">
          View Cart
        </Text>
        <Text className="text-lg text-white font-extrabold">${23}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
