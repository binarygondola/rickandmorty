import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Character } from "../../../../interfaces";
import { useNavigation } from "@react-navigation/native";
import { MainStackNavigationProp } from "../../../Main/Main.routes";
import { CharacterCard } from "../../../../components/CharacterCard";

export const CharacterFlatList = ({ data, onEndReached }: { data: Character[], onEndReached: () => void }) => {
  const { navigate } = useNavigation<MainStackNavigationProp>();

  const ListItem = React.memo<{ character: Character }>(
    ({ character }) => (
      <CharacterCard
        onCardPress={() => navigate('CharacterDetailsStack',
          {
            screen: 'CharacterDetailsScreen',
            params: { character: character }
          })}
        character={character}
      />),
    (prevProps, nextProps) => {
      return prevProps === nextProps;
    },
  );

  return (
    (data.length > 0 &&
      <FlatList
        data={data}
        keyExtractor={(item) => item!.id.toString()}
        onEndReached={onEndReached}
        renderItem={({ item }) => <ListItem character={item!} />}
      />)
  );
}