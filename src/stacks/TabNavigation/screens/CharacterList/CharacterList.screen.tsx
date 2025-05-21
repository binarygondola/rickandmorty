import { View, Text, Button, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { styles } from './CharacterList.styled';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Character, Info } from '../../../../interfaces';

const fetchData = async ({ pageParam }: { pageParam: number }): Promise<Info<Character[]>> => {
  let url = `https://rickandmortyapi.com/api/character/?page=${pageParam}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetching data failed with a ${response.status} from the server`)
  }
  return await response.json();
}

const CharacterListScreen = () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const { navigate } = useNavigation<MainStackNavigationProp>();

  const infQuery = useInfiniteQuery({
    queryKey: ['infCharacters'],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      let nextPage = Number(lastPage.info?.next?.split('page=')[1])
      if (nextPage <= pages[0].info?.pages!) {
        return nextPage;
      }
    }
  })

  const flattenedData = React.useMemo(() => {
    if (!infQuery.data) return [];
    return infQuery.data.pages.flatMap(page => page.results);
  }, [infQuery.data]);

  const ListItem = React.memo(
    ({ character }: { character: Character }) => (
      <TouchableOpacity onPress={() => navigate('CharacterDetailsStack',
        {
          screen: 'CharacterDetailsScreen',
          params: { character: character }
        })}>
        <Text>{character.name}</Text>
      </TouchableOpacity>
    ),
    (prevProps, nextProps) => {
      return prevProps.character.name === nextProps.character.name;
    },
  );

  const ListFooterComponent = React.memo(
    () => (<View><Text>Ładowanie</Text></View>),
    (prevProps, nextProps) => {
      return prevProps === nextProps;
    },
  )

  const ItemSeparator = React.memo(
    () => (<View style={{ height: 2, backgroundColor: 'yellow' }}></View>),
    (prevProps, nextProps) => {
      return prevProps === nextProps;
    },
  )

  return (
    <View style={styles.container}>
      <StatusBar />
      {infQuery.status === 'success' && (
        <ScrollView
          style={{ backgroundColor: 'red' }}
          horizontal
        >
          <FlatList
            data={flattenedData}
            keyExtractor={(item) => item!.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={() => {
              if (infQuery.hasNextPage && !infQuery.isFetchingNextPage) {
                infQuery.fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.2}
            ListFooterComponent={ListFooterComponent}
            renderItem={({ item }) => <ListItem character={item!}></ListItem>}
          >
          </FlatList>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterListScreen;
