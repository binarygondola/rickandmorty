import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Character } from "../../../../interfaces";
import { useNavigation } from "@react-navigation/native";
import { MainStackNavigationProp } from "../../../Main/Main.routes";
import Card from "../../../../components/Card";

export const CharacterFlatList = ({ data, onEndReached }: { data: (Character | undefined)[], onEndReached: () => void }) => {
  const { navigate } = useNavigation<MainStackNavigationProp>();

  const ListItem = React.memo<{ character: Character }>(
    ({ character }) => (
      <Card
        onCardPress={() => navigate('CharacterDetailsStack',
          {
            screen: 'CharacterDetailsScreen',
            params: { character: character }
          })}
        onLikePress={() => { console.log('XD') }}
        isLiked={false}
        character={character}
      />),
    (prevProps, nextProps) => {
      return prevProps === nextProps;
    },
  );

  return (
    <FlatList
      contentContainerStyle={{ alignContent: 'stretch' }}
      data={data}
      keyExtractor={(item) => item!.id.toString()}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      renderItem={({ item }) => <ListItem character={item!} />}
    >
    </FlatList>
  );
}