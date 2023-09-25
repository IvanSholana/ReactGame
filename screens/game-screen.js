import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import ButtonContainer from "../components/primary-button";
import Colors from "../utility/colors";

let minNumber = 0;
let maxNumber = 100;

export default function GameScreen({ userNumber, gameOver }) {
  const [enteredNumber, setEnteredNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );

  const LowerCheck = () => {
    gameOver("opponentsGuest");
    if (enteredNumber < userNumber) {
      Alert.alert("WARNING", "Don't lie", [
        { text: "Exit", style: "cancel", onPress: UpperCheck },
      ]);
    } else {
      maxNumber = enteredNumber - 1;
      console.log(minNumber, maxNumber);
      setEnteredNumber(parseInt(generateRandomNumber(minNumber, maxNumber)));
    }
  };

  const UpperCheck = () => {
    gameOver("opponentsGuest");
    if (enteredNumber > userNumber) {
      Alert.alert("WARNING", "Don't lie", [
        { text: "Exit", style: "cancel", onPress: LowerCheck },
      ]);
    } else {
      minNumber = enteredNumber + 1;
      console.log(minNumber, maxNumber);
      setEnteredNumber(parseInt(generateRandomNumber(minNumber, maxNumber)));
    }
  };

  function generateRandomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toString();
  }

  useEffect(() => {
    if (enteredNumber === userNumber) {
      gameOver("status");
    }
  }, [enteredNumber, userNumber]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR OPPONENT'S NUMBER</Text>
      <TextInput
        style={styles.texInput}
        value={enteredNumber.toString()}
        maxLength={2}
        editable={false}
      />

      <View style={styles.buttonContainer}>
        <ButtonContainer addedStyle={styles.buttonStyle} onPress={UpperCheck}>
          +
        </ButtonContainer>
        <ButtonContainer addedStyle={styles.buttonStyle} onPress={LowerCheck}>
          -
        </ButtonContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: { width: "40%" },
  title: {
    marginTop: 20,
    color: "white",
    fontFamily: "Poppins-SemiBold",
  },
  container: {
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: Colors["golden-tangerine"],
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 5,
  },
  texInput: {
    fontFamily: "Poppins-SemiBold",
    marginTop: 20,
    width: "20%",
    borderBottomWidth: 2,
    padding: 0,
    textAlign: "center",
    fontSize: 40,
    color: Colors["deep-maroon"],
    borderBottomColor: Colors["deep-maroon"],
  },
  buttonContainer: {
    padding: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
