import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const Empty = ({ title, subtitle }) => {
  return (
    <View className='"justify-center item-center px-4'>
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-center font-psemibold mt-2 text-white">
        {subtitle}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>

      <CustomButton
        title={"Create Video"}
        handlePress={() => router.push("/create")}
        containerStyle={'w-full my-5'}
        textStyles={undefined}
        isLoading={undefined}
      />
    </View>
  );
};

export default Empty;
