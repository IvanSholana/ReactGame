import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import GameScreen from "./GameScreen";

export default function StartGameScreen({ startGame }) {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(enterdValue) {
    setEnteredValue(enterdValue);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  function numberValidation() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("WARNING!", "Number is invalid", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    numberInputHandler(chosenNumber);   
    startGame(true);
  }

  return (
    <View style={styles.GameScreenContainer}>
      <TextInput
        style={styles.textinput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        value={enteredValue}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={numberValidation}>Start</PrimaryButton>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GameScreenContainer: {
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#3f0020",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  textinput: {
    textAlign: "center",
    marginVertical: 20,
    height: 50,
    width: 50,
    borderBottomColor: "yellow",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "yellow",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 50,
    marginBottom: 20,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
