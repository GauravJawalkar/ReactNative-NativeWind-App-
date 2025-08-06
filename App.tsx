import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import FlatCard from "./components/FlatCard";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="dark:bg-neutral-800">
          <FlatCard />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}