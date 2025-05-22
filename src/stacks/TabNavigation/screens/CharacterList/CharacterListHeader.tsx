import React, { useState } from "react"
import { Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Filter } from "./Filter";
import { RMButton } from "../../../../components/RMButton";
import { ImageHeader } from "../../../../components/ImageHeader";

type CharacterListHeaderProps = {
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
      <View style={{ alignSelf: 'stretch' }}>
        <ImageHeader />
        <View style={{ padding: 16, paddingTop: 8 }}>
          <Text style={{ fontSize: 36, fontFamily: "Inter_400Regular", marginBottom: 16, color: '#162C1B' }}>Characters</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: 32,
            borderColor: '#162C1B',
            borderWidth: 1,
            paddingHorizontal: 12,
            marginBottom: 16,
            backgroundColor: '#FFFFFF'
          }}>
            <Ionicons name="search" size={20} color="black" />
            <TextInput
              style={{ flexGrow: 1, fontFamily: 'Inter_400Regular', fontSize: 16 }}
              placeholder="Search the characters"
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
      </View>
    </TouchableWithoutFeedback>

  )
}