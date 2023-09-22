import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.primaryButton}>
      <Text style={{ color: "white" }}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 8,
    margin: 10,
    padding: 16,
    backgroundColor: "#72063c",
    alignItems: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});
