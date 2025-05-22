import { StyleSheet } from 'react-native';
import { colorScheme } from '../../../../colorScheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: 16,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colorScheme.mediumGreen,
  },
  goBackButtonText: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: colorScheme.mediumGreen,
  }
});
