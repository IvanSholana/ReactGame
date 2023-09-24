import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [isStartGame, setStartGame] = useState(false);
  let screens = isStartGame ? (
    <GameScreen />
  ) : (
    <StartGameScreen startGame={setStartGame} />
  );

  return (
    <LinearGradient colors={["#72063c", "yellow"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screens}</SafeAreaView>
      </ImageBackground>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: { opacity: 0.15 },
});
