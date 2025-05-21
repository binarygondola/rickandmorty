import { createContext, useState } from 'react';
import React from 'react';

const CharactersContext = createContext({
  characters: [] as number[],
  setCharacters: (characters: number[]) => { },
});

const CharactersProvider = ({ children }: { children: React.ReactNode }) => {
  const [characters, setCharacters] = useState<number[]>([]);

  React.useCallback(() => {
    console.log('titta');
    console.log(characters);
  }, [characters]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
