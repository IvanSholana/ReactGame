import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.primaryButton}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressableStyle, styles.pressed]
            : styles.pressableStyle
        }
        android_ripple={{ color: "#50062b" }}
        onPress={onPress}
      >
        <Text style={{ color: "white" }}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    width: "45%",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#72063c",
    alignItems: "center",
    height: 35,
  },
  pressableStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
