import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import FlatCard from "./components/FlatCard";
import ImagesCard from "./components/ImagesCard";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal={false}>
        <View className="dark:bg-neutral-800 px-2">
          <FlatCard />
          <ImagesCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}