import { Redirect } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1
    }}>
      <Redirect href={'/(tabs)/Home'} />
    </View>
  );
}
