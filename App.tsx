import "./global.css"
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-neutral-800 w-full">
      <Text className="text-2xl font-bold text-blue-500 dark:text-orange-200 my-2 uppercase ">
        Welcome to Nativewind!
      </Text>
      <Pressable className="py-2 px-10 my-2 border rounded-lg bg-gray-200 dark:bg-neutral-900/50 border-gray-100 dark:border-neutral-700">
        <Text className="text-base capitalize ">
          navigation button
        </Text>
      </Pressable>
    </View>
  );
}