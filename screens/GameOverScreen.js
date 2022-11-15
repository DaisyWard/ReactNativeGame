import { Text, View, Image, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colours from '../constants/colours'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 350,
    width: 350,
    height: 350,
    borderWidth: 3,
    borderColor: Colours.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'Open-Sans',
    FontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'Open-Sans-Bold',
    color: Colours.primary500
  }
})
