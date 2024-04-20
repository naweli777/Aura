import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchComponents from "../../components/SearchComponent";
import Trending from "../../components/Trending";
import Empty from "../../components/Empty";
export default function Home() {
  const [refresh, setRefreshing] = useState(false)

  const onRefresh =()=>{
     setRefreshing(true);
     setRefreshing(false);
  }
  return (
    <SafeAreaView className="bg-primary border-2 h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-green-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JS Mastery
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchComponents
              title={undefined}
              value={undefined}
              placeholder={"Search for a video topic"}
              handleChangeText={undefined}
              otherStyles={undefined}
            />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="text-white">
            <Empty
              title="No videos found"
              subtitle="Be the first one to upload videos"
            />
          </Text>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
}
