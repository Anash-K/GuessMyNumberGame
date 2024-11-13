import { ImageBackground, SafeAreaView, StyleSheet, unstable_batchedUpdates, View } from "react-native";
import StartingScreen from "./screens/StartingScreen";
import { LinearGradient } from "expo-linear-gradient";
import backgroundImage from "./assets/images/backgroundImageDice.jpg";
import { useCallback, useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [guessRound,setGuessRound] = useState(0);
  

  const handlePickedNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };


  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/open-sans.regular.ttf'),
    'open-sans-Semibold': require('./assets/fonts/open-sans.semibold.ttf'),
    'open-sans-bold': require('./assets/fonts/open-sans.bold.ttf'),
  });


  useEffect(() => {
    const prepare = async () => {
      try {
        if (fontsLoaded) {
          setIsAppReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    };
    prepare();
  }, [fontsLoaded]);


  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 500);
    }
  }, [isAppReady]);


  if (!isAppReady) {
    return null;
  };

  const handleRestartGame = () =>{
    setUserNumber(null);
    setIsGameOver(false);
    screen = <StartingScreen getPickedNumber={handlePickedNumber} />;
  };

  const handleGameOver = (rounds) =>{
    if(rounds){
      setIsGameOver(true);
      setGuessRound(rounds+1);
    }
  }



  let screen = <StartingScreen getPickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}  onGameOver={handleGameOver} />;
  }

  if (isGameOver) {
    screen = <GameOverScreen onGameRestart={handleRestartGame} rounds={guessRound}  userNumber={userNumber} />;
  }


  return (
    <LinearGradient colors={["purple", Colors.primaryColor]} style={styles.rootContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer} onLayout={onLayoutRootView}>
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
  backgroundImage: {
    opacity: 0.2,
  },
});
