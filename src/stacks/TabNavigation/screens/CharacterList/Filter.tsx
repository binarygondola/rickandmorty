import React from "react"
import { Text, View } from "react-native"

export const Filter = () => {
  return (
    <View style={{ backgroundColor: 'grey' }}>
      <Text>STATUS</Text>
      <Text>SPECIES</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red' }}>
        <Text>RESET</Text>
        <Text>APPLY</Text>
      </View>
    </View>
  )
}