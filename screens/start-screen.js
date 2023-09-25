import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import ButtonContainer from "../components/primary-button";
import Colors from "../utility/colors";
import { useState } from "react";

export default function StartGameScreen({ startGame, getUserNumber }) {
  const [enterdNumber, setEnteredNumber] = useState();

  function enterdNumberHandler(inputNumber) {
    setEnteredNumber(inputNumber);
  }

  const validationNumber = () => {
    const number = parseInt(enterdNumber);

    if (!isNaN(number) && number > 0 && number <= 99) {
      setEnteredNumber(number);
      getUserNumber(number);
      startGame(true);
    } else {
      Alert.alert("INVALID INPUT", "Please Insert Valid Input", [
        { text: "Exit", style: "destructive", onPress: resetNumber },
      ]);
    }
  };

  function resetNumber() {
    setEnteredNumber();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTER YOUR NUMBER</Text>
      <TextInput
        style={styles.texInput}
        onChangeText={enterdNumberHandler}
        value={enterdNumber}
        maxLength={2}
      ></TextInput>

      <View style={styles.buttonContainer}>
        <ButtonContainer
          addedStyle={styles.buttonStyle}
          onPress={validationNumber}
        >
          START
        </ButtonContainer>
        <ButtonContainer addedStyle={styles.buttonStyle} onPress={resetNumber}>
          RESET
        </ButtonContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  buttonStyle: { width: "40%" },
});
