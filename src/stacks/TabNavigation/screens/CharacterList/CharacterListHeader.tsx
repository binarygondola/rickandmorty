import React, { useState } from "react"
import { Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Filter } from "../../../../components/Filter";
import { RMButton } from "../../../../components/RMButton";
import { ImageHeader } from "../../../../components/ImageHeader";
import { styles } from "./CharacterListHeader.styled";
import { colorScheme } from "../../../../colorScheme";

interface CharacterListHeaderProps {
  character: string;
  setCharacter: (_: string) => void;
  setFilters: (_: string) => void
}

export const CharacterListHeader = ({ character, setCharacter, setFilters }: CharacterListHeaderProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  const filterIcon = React.useMemo(() => {
    return (
      <Ionicons
        name={`chevron-${showFilters ? 'up' : 'down'}`}
        size={10}
        color="white"
        style={{ alignSelf: 'center', marginLeft: 8 }}
      />)
  }, [showFilters]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <>
        <ImageHeader />
        <View style={styles.container}>
          <Text style={styles.title}>Characters</Text>
          <View style={styles.search}>
            <Ionicons
              name="search"
              size={20}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search the characters"
              placeholderTextColor={colorScheme.mediumGreen}
              onChangeText={setCharacter}
              value={character}
            />
            <Pressable
              onPress={() => setCharacter("")}
              hitSlop={10}
            >
              {character.length !== 0 && <Ionicons name="close" size={20} color="black" />}
            </Pressable>
          </View>
          <RMButton
            short
            text="FILTER"
            onPress={() => setShowFilters(!showFilters)}
            rightIcon={filterIcon}
            pressed={showFilters}
          />
          {showFilters && (
            <Filter
              status={status}
              species={species}
              setStatus={setStatus}
              setSpecies={setSpecies}
              setFilters={setFilters}
            />)}
        </View>
      </>
    </TouchableWithoutFeedback>
  )
}