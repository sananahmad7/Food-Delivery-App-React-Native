import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categoriesList } from "../constants/index";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoriesList.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={`p-1 rounded-full shadow${btnClass}`}
              >
                <Image
                  className="ml-1"
                  source={category.image}
                  style={{ height: 45, width: 45 }}
                />
              </TouchableOpacity>
              <Text className={`text-sm ml-1${textClass}`}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
