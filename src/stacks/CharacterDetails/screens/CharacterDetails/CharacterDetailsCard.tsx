import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { Character } from '../../../../interfaces';
import { RMButton } from '../../../../components/RMButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CharactersContext } from '../../../../context/CharacterContext';
import { colorScheme } from '../../../../colorScheme';
import { CharacterDetailsInfo } from './CharacterDetailsInfo';
import { styles } from './CharacterDetailsCard.styled';

interface CharacterDetailsCardProps {
  character: Character;
}

export const CharacterDetailsCard = ({ character }: CharacterDetailsCardProps) => {
  const { characters, setCharacters } = useContext(CharactersContext);

  const isLiked = characters.includes(character.id);

  const onPress = React.useCallback(() => {
    if (characters.includes(character.id)) {
      setCharacters(characters.filter(x => x !== character.id));
    } else {
      setCharacters([...characters, character.id])
    }
  }, [characters])

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: character.image }}
        style={styles.characterImage}
      />
      <CharacterDetailsInfo character={character} />
      <RMButton
        onPress={onPress}
        text={isLiked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
        pressed={isLiked}
        leftIcon={
          <Ionicons
            name={isLiked ? "star-sharp" : "star-outline"}
            size={16}
            color={isLiked ? colorScheme.accent : "white"}
            style={{ marginRight: 8 }}
          />}
      />
    </View>
  );
};
