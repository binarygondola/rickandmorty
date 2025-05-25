import { StyleSheet } from 'react-native';
import { colorScheme } from '../../../../colorScheme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 24,
    boxShadow: '4 4 0 0 ' + colorScheme.primaryGreen,
    borderColor: colorScheme.primaryGreen,
    borderWidth: 1,
  },
  characterImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 24,
    borderColor: colorScheme.primaryGreen,
    borderWidth: 1,
    marginBottom: 16,
  },
});
