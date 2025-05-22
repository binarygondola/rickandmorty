import { View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { styles } from './CharacterList.styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Character, Info } from '../../../../interfaces';
import { CharacterFlatList } from './CharacterFlatList';
import { CharacterListHeader } from './CharacterListHeader';

export const CharacterListScreen = () => {
  const [characterName, setCharacterName] = useState('');
  const [filters, setFilters] = useState('');

  const fetchData = React.useCallback(async ({ pageParam }: { pageParam: number }): Promise<Info<Character[]>> => {
    let url = `https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${characterName}${filters}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetching data failed with a ${response.status} from the server`)
    }
    return await response.json();
  }, [characterName, filters]);

  const infQuery = useInfiniteQuery({
    queryKey: ['infCharacters'],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      let params = lastPage.info?.next?.split('?')[1];
      let pageParam = params?.split('&').find((val) => val.includes('page'));
      let nextPage = Number(pageParam?.split('=')[1]);
      if (nextPage <= pages[0].info?.pages!) {
        return nextPage;
      }
    }
  });

  React.useEffect(() => {
    console.log('refetch');
    infQuery.refetch();
  }, [filters]);

  React.useEffect(() => {
    infQuery.refetch();
  }, [characterName]);

  const flattenedData = React.useMemo(() => {
    if (!infQuery.data) return [];
    return infQuery.data.pages.flatMap(page => page.results!);
  }, [infQuery.data]);

  const onEndReached = React.useCallback(() => {
    if (infQuery.hasNextPage && !infQuery.isFetchingNextPage)
      infQuery.fetchNextPage();
    return infQuery.hasNextPage;
  }, [infQuery.hasNextPage]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <CharacterListHeader character={characterName} setCharacter={setCharacterName} setFilters={setFilters} />
      {infQuery.status === 'success' && (
        <CharacterFlatList data={flattenedData} onEndReached={onEndReached} />
      )}
    </View>
  );
};
