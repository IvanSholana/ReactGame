import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import ButtonContainer from "../components/primary-button";
import Colors from "../utility/colors";
import { useEffect, useState } from "react";

let minNumber = 0;
let maxNumber = 100;

export default function GameScreen({ userNumber }) {
  const [enteredNumber, setEnteredNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );

  const LowerCheck = () => {
    if (enteredNumber > userNumber) {
      Alert.alert("WARNING", "don't lie", [
        { text: "exit", style: "cancel", onPress: UpperCheck() },
      ]);
      return;
    } else {
      maxNumber = enteredNumber - 1;
      setEnteredNumber(parseInt(generateRandomNumber(minNumber, maxNumber)));
    }
  };

  function UpperCheck() {
    if (enteredNumber < userNumber) {
      Alert.alert("WARNING", "don't lie", [
        { text: "exit", style: "cancel", onPress: UpperCheck() },
      ]);
      return;
    } else {
      minNumber = enteredNumber + 1;
      setEnteredNumber(parseInt(generateRandomNumber(minNumber, maxNumber)));
    }
  }
  function generateRandomNumber(maxNumber, minNumber) {
    const randomNum = Math.floor(Math.random() * maxNumber) + minNumber;
    return randomNum.toString();
  }

  useEffect(() => {
    if (enteredNumber === userNumber) {
      console.log("WIN");
    }
  }, [enteredNumber]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR OPPONENT'S NUMBER</Text>
      <TextInput
        style={styles.texInput}
        value={enteredNumber.toString()}
        maxLength={2}
        editable={false}
      ></TextInput>

      <View style={styles.buttonContainer}>
        <ButtonContainer onPress={UpperCheck}>+</ButtonContainer>
        <ButtonContainer onPress={LowerCheck}>-</ButtonContainer>
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
});
