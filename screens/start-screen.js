import { View, StyleSheet, Text, TextInput } from "react-native";
import ButtonContainer from "../components/primary-button";
import Colors from "../utility/colors";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTER YOUR NUMBER</Text>
      <TextInput style={styles.texInput}></TextInput>
      <View style={styles.buttonContainer}>
        <ButtonContainer>START</ButtonContainer>
        <ButtonContainer>END</ButtonContainer>
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
