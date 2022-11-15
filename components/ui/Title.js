import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Open-Sans-Bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12
  }
})