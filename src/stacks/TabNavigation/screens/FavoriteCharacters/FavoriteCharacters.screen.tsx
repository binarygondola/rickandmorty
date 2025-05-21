import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Info, Character } from '../../../../interfaces';
import { CharacterFlatList } from '../CharacterList/CharacterFlatList';
import { Heading } from '../CharacterList/CharacterListHeader';
import { styles } from './FavoriteCharacters.styled';
import { CharactersContext } from '../../../../context/CharacterContext';

const FavoriteCharactersScreen = () => {
  const [characterName, setCharacterName] = useState('');
  const { characters } = useContext(CharactersContext);

  const fetchData = React.useCallback(async (): Promise<Character[]> => {
    let url = `https://rickandmortyapi.com/api/character/${characters}`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetching data failed with a ${response.status} from the server`)
    }
    return await response.json();
  }, [characters]);

  const query = useQuery({
    queryKey: ['characters'],
    queryFn: fetchData,
  });

  const favData = React.useMemo(() => {
    if (!query.data) return [];
    console.log(query.data);
    return query.data;
  }, [query.data]);

  const onEndReached = React.useCallback(() => {
    return true;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Heading character={characterName} setCharacter={setCharacterName} />
      {query.status === 'success' && (
        <CharacterFlatList data={favData} onEndReached={onEndReached} />
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
