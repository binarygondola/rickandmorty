import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './CharacterDetails.styled';
import { CharacterDetailsStackParamList } from '../../CharacterDetails.routes';

const CharacterDetailsScreen = ({ name }: CharacterDetailsStackParamList["CharacterDetailsScreen"]) => {

  console.log(name);
  return (
    <View style={styles.container}>
      <Text>Implement CharacterDetailsScreen XD</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
