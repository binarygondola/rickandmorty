import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerName: {
    justifyContent: 'space-around',
  },
  containerText: {
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16,
  },
  containerRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#59695C',
    marginBottom: 4,
    fontFamily: "DMMono_400Regular",
    letterSpacing: 1.08,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: '#162C1B',
    marginBottom: 10,
  },
  smallerTextContainer: {
    backgroundColor: '#F4F6F5',
    borderRadius: 10,
    padding: 8,
    flexGrow: 1,
    flexBasis: 1
  }
});
