import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  LogBox
} from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState, useCallback, useEffect } from 'react'
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Colours from './constants/colours'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = (
    <StartGameScreen
      onPickNumber={(pickedNumber) => pickedNumberHandler(pickedNumber)}
    />
  )

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={() => startNewGameHandler()}
      />
    )
  }

  return (
    <View style={styles.rootScreen} onLayout={onLayoutRootView}>
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colours.primary700, Colours.accent500]}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
})
