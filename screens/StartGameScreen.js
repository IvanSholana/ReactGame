import { View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View>
      <PrimaryButton>Start</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}
