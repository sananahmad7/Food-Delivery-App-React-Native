import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useEffect } from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants/index.js";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { themeColors } from "../theme/index.js";
import { selectRestaurant } from "../slices/restaurantSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../slices/cartSlice.js";
const getLocationPermission = async () => {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
  }
};

const DeliveryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurants = useSelector(selectRestaurant);
  console.log("Restaurants Data:", restaurants); // Debugging line
  console.log("Coordinates:", restaurants.lat, restaurants.lng);
  // Validate latitude and longitude
  useEffect(() => {
    getLocationPermission();
  }, []);
  const isValidCoordinates = (lat, lng) =>
    lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;

  console.log(isValidCoordinates(restaurants.lat, restaurants.lng));
  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };
  return (
    <View className="flex-1">
      {isValidCoordinates(restaurants.lat, restaurants.lng) ? ( // Check if coordinates are valid
        <MapView
          initialRegion={{
            latitude: restaurants.lat,
            longitude: restaurants.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={{ flex: 1 }}
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: restaurants.lat,
              longitude: restaurants.lng,
            }}
            title={restaurants.name}
            description={restaurants.description}
          />
        </MapView>
      ) : (
        <Text className=" flex-1 justify-center bg-white items-center font-extralight text-lg text-black">
          Invalid location data
        </Text> // Fallback if coordinates are invalid
      )}
      <View className="rounded-t-3xl -mt12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20 - 30 Minutes
            </Text>
            <Text className="font-semibold text-gray-700 my-2">
              Your order is on it's way
            </Text>
          </View>
          <Image
            className="w-24 h-24 rounded-3xl"
            source={require("../assets/images/bikeGuy2.png")}
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/sharif.jpg")}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="font-bold text-lg text-white">Nawaz Sharif</Text>
            <Text className="font-bold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white p-2 rounded-full ml-2"
              onPress={cancelOrder}
            >
              <Icon.X
                fill={themeColors.bgColor(1)}
                stroke={"red"}
                strokeWidth={4}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
