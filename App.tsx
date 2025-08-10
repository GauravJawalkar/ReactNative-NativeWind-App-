import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import FlatCard from "./src/components/FlatCard";
import ImagesCard from "./src/components/ImagesCard";
import ContactList from "./src/components/ContactList";

export default function App() {
  return (
    <SafeAreaView className="flex-1 dark:bg-neutral-800">
      <ScrollView horizontal={false} className="dark:bg-neutral-800 ">
        <FlatCard />
        <ImagesCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}