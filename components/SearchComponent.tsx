import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";

const SearchComponents = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 flex-1 text-white font-pregular text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image
          source={images.search}
          className="w-9 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponents;
