import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { featured } from "../constants/index.js";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice.js";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice.js";
import { useState } from "react";
const CartScreen = () => {
  const deliveryFee = 3;
  const [groupedItems, setGroupedItems] = useState({});
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, []);

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
        <View>
          <Text className="text-center font-bold text-xl mt-4">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/*Delivery Time */}

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-6 py-2 items-center"
      >
        <Image
          className="w-20 h-20 rounded-full "
          source={require("../assets/images/bikeGuy.png")}
        />
        <Text className="flex-1 pl-6">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-3 bg-white rounded-3xl mx-4 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image
                className="h-14 w-14 rounded-full ml-2"
                source={dish.image}
              />
              <Text className="flex-1 font-bold text-gray-700 ml-2">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="ml-1 p-1 rounded-full"
                onPress={() => {
                  dispatch(removeFromCart({ id: dish.id }));
                  setGroupedItems((prev) => {
                    const updatedItems = { ...prev };
                    if (updatedItems[dish.id].length > 1) {
                      updatedItems[dish.id].pop(); // Remove one item
                    } else {
                      delete updatedItems[dish.id]; // Remove the group if empty
                    }
                    return updatedItems;
                  });
                }}
              >
                <Icon.Minus
                  stroke="white"
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/** */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.25) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">{cartTotal}$</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">{deliveryFee}$</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            {cartTotal + deliveryFee}$
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            className="p-5 mt-1 rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className=" text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
