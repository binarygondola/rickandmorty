import { Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { styles } from './CharacterDetails.styled';
import { DetailsScreenProps } from '../../CharacterDetails.routes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CharacterDetailsCard } from './CharacterDetailsCard';
import { useNavigation } from '@react-navigation/native';
import { ImageHeader } from '../../../../components/ImageHeader';
import { colorScheme } from '../../../../colorScheme';

const CharacterDetailsScreen = ({ route }: DetailsScreenProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header onPress={navigation.goBack} />
      <ScrollView>
        <CharacterDetailsCard
          character={route.params.character}
        />
      </ScrollView>
    </View>
  );
};

const Header = ({ onPress }: { onPress: () => void }) => {
  return (
    <>
      <ImageHeader />
      <View style={styles.headerText}>
        <Pressable
          onPress={onPress}
          style={styles.goBackButton}>
          <Ionicons
            name='arrow-back'
            color={colorScheme.mediumGreen}
            size={16}
          />
          <Text
            style={styles.goBackButtonText}>Go back to Characters List</Text>
        </Pressable >
      </View>
    </>
  )
}

export default CharacterDetailsScreen;
