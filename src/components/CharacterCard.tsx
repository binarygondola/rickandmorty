import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Character } from '../interfaces';
import { LikeButton } from './LikeButton';
import { CharactersContext } from '../context/CharacterContext';
import { styles } from './CharacterCard.styled';

interface CardProps {
  character: Character;
  onCardPress: () => void;
}

export const CharacterCard = ({ character, onCardPress }: CardProps) => {
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
    <Pressable onPress={onCardPress}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.labelText}>{character.name}</Text>

          <Text style={styles.label}>STATUS</Text>
          <Text style={styles.labelText}>{character.status}</Text>

          <Text style={styles.label}>SPECIES</Text>
          <Text style={styles.labelText}>{character.species}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: character.image }}
            style={styles.characterImage}
          />
          <LikeButton
            onPress={onPress}
            text="LIKE"
            pressed={isLiked}
            style={styles.likeButton}
          />
        </View>
      </View>
    </Pressable>
  );
};

