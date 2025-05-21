import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './CharacterDetails.styled';
import { DetailsScreenProps } from '../../CharacterDetails.routes';

const CharacterDetailsScreen = ({ route }: DetailsScreenProps) => {
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Text>Implement CharacterDetailsScreen XD</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
