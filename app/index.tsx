import { View, Text, ImageBackground, ImageSourcePropType } from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage as ImageSourcePropType}
        resizeMode="cover"
        className="flex-1"
      >
        <Text>Hello World!</Text>
      </ImageBackground>
    </View>
  );
}
