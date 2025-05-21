import React, { useState } from "react"
import { Image, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Filter } from "./Filter";
import { RMButton } from "../../../../components/RMButton";

type HeadingProps = {
  character: string;
  setCharacter: (_: string) => void
}

export const Heading = ({ character, setCharacter }: HeadingProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const filterIcon = React.useMemo(() => {
    return (
      <Ionicons
        name={`chevron-${showFilters ? 'up' : 'down'}`}
        size={10}
        color="white"
        style={{ alignSelf: 'center', marginLeft: 8 }}
      />)
  }, [showFilters])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ alignSelf: 'stretch' }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#162C1B' }}>
          <Image
            resizeMode='contain'
            source={require("../../../../../assets/images/rick-and-morty.png")}
            style={{ marginLeft: 16, marginVertical: 24, height: 32, width: 104 }} />
        </View>
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
            text="FILTER"
            onPress={() => setShowFilters(!showFilters)}
            rightIcon={filterIcon}
            pressed={showFilters}
          />
          {showFilters && <Filter />}
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}