import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../utility/colors";
import ButtonContainer from "../components/primary-button";

export default function GameOverScreen({ poin, userNumber, restartGame }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GAME OVER</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          source={require("../assets/success.png")}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.teksDescriptionContainer}>
        <Text style={styles.teksDescription}>
          Your phone needed
          <Text style={{ fontWeight: "bold", color: Colors["deep-maroon"] }}>
            {" "}
            {poin}
          </Text>{" "}
          rounds to guess the number
          <Text style={{ fontWeight: "bold", color: Colors["deep-maroon"] }}>
            {" "}
            {userNumber}{" "}
          </Text>
        </Text>
      </View>
      <ButtonContainer onPress={restartGame} addedStyle={styles.buttonTryAgain}>
        TRY AGAIN
      </ButtonContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTryAgain: { width: "100%", marginTop: 20 },
  teksDescription: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    borderWidth: 5,
    borderColor: "white",
    alignContent: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    justifyContent: "center",
  },
  containerImage: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: "center",
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: Colors["burnt-sienna"],
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "white",
  },
});
