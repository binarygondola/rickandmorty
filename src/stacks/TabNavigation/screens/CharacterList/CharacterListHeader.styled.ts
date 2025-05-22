import { StyleSheet } from 'react-native';
import { colorScheme } from '../../../../colorScheme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme.lightGreen,
    padding: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 36,
    fontFamily: "Inter_400Regular",
    marginBottom: 16,
    color: colorScheme.darkGreen,
    letterSpacing: -3,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 32,
    borderColor: colorScheme.darkGreen,
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#FFFFFF'
  },
  textInput: {
    flexGrow: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  }
});
