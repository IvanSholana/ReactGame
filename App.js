import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";
import StartGameScreen from "./screens/start-screen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utility/colors";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("./assets/font/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/font/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={[Colors["burnt-sienna"], Colors["warm-yellow"]]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        imageStyle={{ opacity: 0.15 }}
        style={{ flex: 1 }}
        source={require("./assets/background.png")}
      >
        {/* Komponen ImageBackground hanya digunakan untuk latar belakang */}
        <View style={styles.container}>
          <StartGameScreen />
          <StatusBar style="auto" />
        </View>
      </ImageBackground>

      {/* Komponen StartGameScreen ditempatkan di luar ImageBackground */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 50,
  },
});
