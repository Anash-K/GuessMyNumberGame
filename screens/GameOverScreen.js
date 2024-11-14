import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/UI/Title";
import WinImage from "../assets/images/winner_Image.jpg";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useEffect } from "react";

const GameOverScreen = ({ onGameRestart, rounds, userNumber }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 200;
  }

  if (height < 400) {
    imageSize = 100;
  }

  useEffect(() => {
    console.log(height);
  }, [height]);

  const ImageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Title title={"Game Over!"} />
        <View style={[styles.imageContainer, ImageStyle]}>
          <Image style={styles.WinImageStyle} source={WinImage} />
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Your Phone Needed <Text style={styles.InnerText}>{rounds}</Text>{" "}
            Rounds To Guess The Number{" "}
            <Text style={styles.InnerText}>{userNumber}</Text>.
          </Text>
        </View>
        <View>
          <PrimaryButton onPress={onGameRestart}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  imageContainer: {
    borderColor: Colors.secodaryColor,
    borderWidth: 2,
    overflow: "hidden",
  },
  WinImageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 17,
    fontFamily: "open-sans-Semibold",
    textAlign: "center",
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
