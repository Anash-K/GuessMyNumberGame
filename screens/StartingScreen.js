import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const StartingScreen = ({ getPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleChange = (text) => {
    setEnteredNumber(text);
  };

  const confirmNumber = () => {
    let number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid Number", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    } else {
      getPickedNumber(enteredNumber);
    }
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title title={"Guess My Number"} />
      <Card>
        <InstructionText>Enter A Number</InstructionText>
        <TextInput
          value={enteredNumber}
          style={styles.inputBox}
          placeholder="0"
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          // multiline={true}
          // numberOfLines={2}
          onChangeText={handleChange}
          // caretHidden={true}
          clearButtonMode="always"
          // clearTextOnFocus={true}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 25,
    padding: 15,
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    elevation: 12,
    shadowColor: "black",

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  inputBox: {
    width: 40,
    maxWidth: "fit",
    borderBottomWidth: 2,
    borderColor: Colors.secodaryColor,
    marginHorizontal: "auto",
    marginVertical: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
 
});

export default StartingScreen;
