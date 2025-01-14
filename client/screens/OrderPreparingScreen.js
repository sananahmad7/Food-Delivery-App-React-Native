import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPreparingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        className="ml-14"
        source={require("../assets/deliveryScreen.gif")}
      />
    </View>
  );
};

export default OrderPreparingScreen;
