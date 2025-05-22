import { StyleSheet } from 'react-native';
import { colorScheme } from '../colorScheme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 24,
    boxShadow: '4 4 0 0 ' + colorScheme.primaryGreen,
    borderColor: colorScheme.primaryGreen,
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterImage: {
    width: '100%',
    flex: 1,
    borderRadius: 24,
    borderColor: colorScheme.primaryGreen,
    borderWidth: 1,
  },
  likeButton: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colorScheme.primaryGreen,
    borderWidth: 1,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  likeButtonText: {
    marginLeft: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: colorScheme.primaryGreen,
  },
});

