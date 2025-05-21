import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Character } from '../../../../interfaces';
import { RMButton } from '../../../../components/RMButton';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CharacterDetailsCardProps {
  character: Character;
  isLiked: boolean;
  onLikePress: () => void;
}

export const CharacterDetailsCard = ({ character, onLikePress }: CharacterDetailsCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <TextInfo character={character} />
      <View style={styles.imageContainer}>
      </View>
      <RMButton
        onPress={() => console.log('XD')}
        text={'ADD TO LIKED'}
        pressed={false}
        leftIcon={
          <Ionicons
            name="star-outline"
            size={16}
            color="white"
            style={{ marginRight: 8 }}
          />}
      />
    </View>
  );
};

const TextInfo = ({ character }: { character: Character }) => {
  return (
    <View>
      <View style={styles.containerName}>
        <Text style={styles.label}>NAME</Text>
        <Text style={[styles.labelText, { fontSize: 44 }]}>{character.name}</Text>
      </View>
      <View style={styles.container}>
        <SmallerText labelName='STATUS' labelText={character.status} />
        <SmallerText labelName='ORIGIN' labelText={character.origin.name} />
        <SmallerText labelName='SPECIES' labelText={character.species} />
        <SmallerText labelName='GENDER' labelText={character.gender} />
      </View>
    </View>
  )
}

const SmallerText = ({ labelName, labelText }: { labelName: string, labelText: string }) => {
  return (
    <View style={{ width: '50%' }}>
      <Text style={styles.label}>{labelName}</Text>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderRadius: 24,
    marginHorizontal: 16,
    padding: 12,
    boxShadow: '4 4 0 0 #224229',
    borderColor: '#224229',
    borderWidth: 2,
  },
  containerName: {
    flex: 1,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
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
    aspectRatio: 1,
    borderRadius: 24,
    borderColor: '#224229',
    borderWidth: 1,
    marginBottom: 16,
  },
  likeButtonContainer: {

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
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004D40',
  },
});
