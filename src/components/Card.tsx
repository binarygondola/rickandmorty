import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Character } from '../interfaces';
import { LikeButton } from './LikeButton';
import { CharactersContext } from '../context/CharacterContext';

interface CardProps {
  character: Character;
  onCardPress: () => void;
}

export const Card = ({ character, onCardPress }: CardProps) => {
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
        <View style={styles.container}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.labelText}>{character.name}</Text>

          <Text style={styles.label}>STATUS</Text>
          <Text style={styles.labelText}>{character.status}</Text>

          <Text style={styles.label}>SPECIES</Text>
          <Text style={styles.labelText}>{character.species}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={{ uri: character.image }} style={styles.characterImage} />
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

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 24,
    boxShadow: '4 4 0 0 #224229',
    borderColor: '#224229',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingRight: 10,
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterImage: {
    width: '100%',
    flex: 1,
    borderRadius: 24,
    borderColor: '#224229',
    borderWidth: 1,
  },
  likeButton: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#224229',
    borderWidth: 1,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  likeButtonText: {
    marginLeft: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#224229',
  },
});
