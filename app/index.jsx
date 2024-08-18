import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Link href={"/login"}>
        <Text>Go to Login Screen</Text>
      </Link>
    </View>
  );
}
