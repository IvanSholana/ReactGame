import { View, StyleSheet, Button, Pressable, Text } from "react-native";
import Colors from "../utility/colors";

export default function ButtonContainer({ children, onPress }) {
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.textButton}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: "center",
    backgroundColor: Colors["deep-maroon"],
    padding: 10,
    borderRadius: 15,
    width: "40%",
  },
  textButton: {
    color: "white",
    fontFamily: "Poppins-Medium",
  },
});
