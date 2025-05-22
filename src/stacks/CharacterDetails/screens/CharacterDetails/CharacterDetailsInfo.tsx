import React from "react"
import { Text, View } from "react-native"
import { Character } from "../../../../interfaces"
import { styles } from "./CharacterDetailsInfo.styled"

export const CharacterDetailsInfo = ({ character }: { character: Character }) => {
  return (
    <View>
      <Text style={styles.label}>NAME</Text>
      <Text style={[styles.labelText, { fontSize: 44, letterSpacing: -3 }]}>{character.name}</Text>
      <View style={styles.containerText}>
        <View style={styles.containerRow}>
          <SmallerText labelName='STATUS' labelText={character.status} />
          <SmallerText labelName='ORIGIN' labelText={character.origin.name} />
        </View>
        <View style={styles.containerRow}>
          <SmallerText labelName='SPECIES' labelText={character.species} />
          <SmallerText labelName='GENDER' labelText={character.gender} />
        </View>
      </View>
    </View>
  )
}

const SmallerText = ({ labelName, labelText }: { labelName: string, labelText: string }) => {
  return (
    <View style={styles.smallerTextContainer}>
      <Text style={styles.label}>{labelName}</Text>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
  )
}