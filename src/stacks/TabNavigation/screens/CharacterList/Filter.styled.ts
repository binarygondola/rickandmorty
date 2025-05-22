import { StyleSheet } from 'react-native';
import { colorScheme } from '../../../../colorScheme';

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    boxShadow: '4 4 0 0 ' + colorScheme.primaryGreen,
    borderColor: colorScheme.primaryGreen,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 12,
    color: colorScheme.mediumGreen,
    marginBottom: 4,
    fontFamily: "DMMono_400Regular",
    letterSpacing: 1.08,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: colorScheme.darkGreen,
    marginBottom: 10,
  },

});
