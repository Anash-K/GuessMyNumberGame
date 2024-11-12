import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import WinImage from "../assets/images/winner_Image.jpg";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Title title={"Game Over!"} />
      <View style={styles.imageContainer}>
        <Image style={styles.WinImageStyle} source={WinImage} />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Your Phone Needed <Text style={styles.InnerText}>X</Text> Rounds To
          Guess The Number <Text style={styles.InnerText}>Y</Text>.
        </Text>
      </View>
      <View>
        <PrimaryButton onPress={}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderColor: Colors.secodaryColor,
    borderWidth: 2,
  },
  WinImageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 17,
    fontFamily: "open-sans-Semibold",
  },
  InnerText: {
    fontFamily: "open-sans-bold",
    color: Colors.secodaryColor,
  },
  summaryContainer: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
});

export default GameOverScreen;
