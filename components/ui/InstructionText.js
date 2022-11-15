import { Text, StyleSheet } from 'react-native'
import Colours from '../../constants/colours'

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'Open-Sans',
    color: Colours.accent500,
    fontSize: 24
  }
})
