import { Image, Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { styles } from './CharacterDetails.styled';
import { DetailsScreenProps } from '../../CharacterDetails.routes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CharacterDetailsCard } from './CharacterDetailsCard';
import { useNavigation } from '@react-navigation/native';

const CharacterDetailsScreen = ({ route }: DetailsScreenProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header onPress={navigation.goBack} />
      <ScrollView>
        <CharacterDetailsCard
          character={route.params.character}
          isLiked={false}
          onLikePress={() => { console.log('XD') }}
        />
      </ScrollView>
    </View>
  );
};

const Header = ({ onPress }: { onPress: () => void }) => {
  return (
    <>
      <View style={{ alignSelf: 'stretch' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#162C1B' }}>
          <Image
            resizeMode='contain'
            source={require("../../../../../assets/images/rick-and-morty.png")}
            style={{ marginLeft: 16, marginVertical: 24, height: 32, width: 104 }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'stretch', margin: 16, }}>
        <Pressable onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#59695C' }}>
          <Ionicons name='arrow-back' color='#59695C' size={15} />
          <Text style={{ fontSize: 15, fontFamily: "Inter_400Regular", color: '#59695C' }}>Go back to Characters List</Text>
        </Pressable >
      </View>
    </>
  )
}


export default CharacterDetailsScreen;
