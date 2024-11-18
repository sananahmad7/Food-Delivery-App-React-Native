import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

const RestaurantCard = ({ restaurant }) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 10 }}
        className="mr-6 bg-white rounded-3xl shadow-lg mt-1 mb-1"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
        <View className="px-3 pb-2 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-3 w-3"
            />
            <Text className="text-xs ml-1">
              <Text className="text-green-700">{restaurant.stars}</Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} reviews) .{" "}
                <Text className="font-semibold">{restaurant.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 mt-1">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-gray-700 text-xs">
              Nearby . {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
