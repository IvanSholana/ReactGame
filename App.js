import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";
import StartGameScreen from "./screens/start-screen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utility/colors";
import { useFonts } from "expo-font";
import GameScreen from "./screens/game-screen";
import { useState } from "react";
import GameOverScreen from "./screens/game-over-screen";

export default function App() {
  const [isGameStarted, setGameStart] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [isWin, setIsWin] = useState({ status: false, opponetsGuest: 0 });
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("./assets/font/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/font/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function gameOver(atribute) {
    if (atribute === "status") {
      console.log("WIN");
      setIsWin({ ...isWin, status: true });
      setGameStart(false);
    } else if (atribute === "opponentsGuest") {
      setIsWin({ ...isWin, opponetsGuest: isWin.opponetsGuest + 1 });
    }
  }

  function RestartGame() {
    setGameStart(false);
    setUserNumber();
    setIsWin({ status: false, opponetsGuest: 0 });
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
        <View style={styles.container}>
          {isGameStarted ? (
            <GameScreen userNumber={userNumber} gameOver={gameOver} />
          ) : !isWin.status ? (
            <StartGameScreen
              startGame={setGameStart}
              getUserNumber={setUserNumber}
            />
          ) : (
            <GameOverScreen
              poin={isWin.opponetsGuest}
              userNumber={userNumber}
              restartGame={RestartGame}
            />
          )}
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 40,
    marginTop: 50,
  },
});
