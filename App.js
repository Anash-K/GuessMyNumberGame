import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartingScreen from "./screens/StartingScreen";
import { LinearGradient } from "expo-linear-gradient";
import backgoundImage from "./assets/images/backgroundImageDice.jpg";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePickedNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const handleGameOver = () =>{
    setIsGameOver(true);
  }

  let screen = <StartingScreen  getPickedNumber={handlePickedNumber}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if(isGameOver){
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={["purple", Colors.primaryColor]} style={styles.rootContainer}>
      <ImageBackground
        source={backgoundImage}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgoundImage}
      >
        <SafeAreaView  style={styles.rootContainer}>
         {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgoundImage: {
    opacity: 0.2,
  },
});
