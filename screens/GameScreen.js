import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import { useEffect, useState } from "react";
import NumericContainer from "../components/NumbericContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import Colors from "../constants/Colors";
import InstructionText from "../components/UI/InstructionText";

const guessRateBetween = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum == exclude) {
    return guessRateBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  let minGuessValue = 1;
  let maxGuessValue = 100;

  const initialGuess = guessRateBetween(
    minGuessValue,
    maxGuessValue,
    userNumber
  );
  const [currentNumber, setCurrentNumber] = useState(initialGuess);

  const handleNextGuess = (direction) => {
    if (
      (direction == "lower" && currentNumber < userNumber) ||
      (direction == "higher" && currentNumber > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxGuessValue = currentNumber;
    } else {
      minGuessValue = currentNumber + 1;
    }

    const newRandNumber = guessRateBetween(
      minGuessValue,
      maxGuessValue,
      currentNumber
    );
    setCurrentNumber(newRandNumber);

    if (newRandNumber == userNumber) {
      onGameOver();
    }
  };

  return (
    <View style={styles.container}>
      <Title title={"Opponent's Guess"} />
      <NumericContainer>{currentNumber}</NumericContainer>
      <Card>
          <InstructionText style={styles.questionText}>Higher or Lower ?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleNextGuess.bind(this, "lower")}>
            Higher
          </PrimaryButton>
          <PrimaryButton onPress={handleNextGuess.bind(this, "higher")}>
            Lower
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  questionBox: {
    marginVertical:10
  },
  questionText: {
    color:Colors.secodaryColor,
    fontSize: 18,
    fontWeight:'bold'
  },
});

export default GameScreen;
