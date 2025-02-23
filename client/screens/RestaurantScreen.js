import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
const RestaurantScreen = () => {
  const { params } = useRoute();
  const item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
      console.log("data has been set to redux : ", item);
    }
  }, []);
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 p-2 bg-gray-50 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-10"
        >
          <View className="px-5">
            <Text className="font-bold text-3xl">{item.name}</Text>
            <View className="flex-row space-x-3 my-1 ">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-3 w-3"
                />
                <Text className="text-xs ml-1">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} reviews) .{" "}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 mt-1 ml-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  Nearby . {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500  mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 font-bold text-3xl"> Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
