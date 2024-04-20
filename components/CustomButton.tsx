import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
