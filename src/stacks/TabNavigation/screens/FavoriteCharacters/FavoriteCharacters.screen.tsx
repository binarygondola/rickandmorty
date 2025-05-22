import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Character } from '../../../../interfaces';
import { CharacterFlatList } from '../CharacterList/CharacterFlatList';
import { CharacterListHeader } from '../CharacterList/CharacterListHeader';
import { styles } from './FavoriteCharacters.styled';
import { CharactersContext } from '../../../../context/CharacterContext';

const FavoriteCharactersScreen = () => {
  const [characterName, setCharacterName] = useState('');
  const [filters, setFilters] = useState('');
  const [characterList, setCharactersList] = useState<Character[]>([]);

  const { characters } = useContext(CharactersContext);

  const query = useQuery({
    queryKey: ['characters'],
    queryFn: async (): Promise<Character[]> => {
      if (characters.length === 0) {
        return [];
      }
      let url = `https://rickandmortyapi.com/api/character/${characters}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Fetching data failed with a ${response.status} from the server`)
      }

      let data = await response.json();
      if (Array.isArray(data)) {
        return data;
      } else {
        return [data];
      }
    }
  });

  const onEndReached = React.useCallback(() => true, []);

  React.useEffect(() => {
    query.refetch();
  }, [characters]);

  React.useEffect(() => {
    if (!!query.data) {
      query.data = query.data.filter((character) => character.name.toLowerCase().includes(characterName.toLowerCase()));

      let status = /&status=(.*)/.exec(filters);
      if (status !== null) {
        query.data = query.data.filter((character) => character.status.toLowerCase().includes(status[1]));
      }

      let species = /&species=(.*)/.exec(filters);
      if (species !== null) {
        query.data = query.data.filter((character) => character.species.toLowerCase().includes(species[1]));
      }

      setCharactersList(query.data);
    } else {
      setCharactersList([]);
    }
  }, [query.data, filters, characterName]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <CharacterListHeader
        setFilters={setFilters}
        character={characterName}
        setCharacter={setCharacterName}
      />
      {query.status === 'success' && (
        <CharacterFlatList
          data={characterList}
          onEndReached={onEndReached}
        />
      )}
    </View>
  );
};

export default FavoriteCharactersScreen;
