import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { MainStack } from './src/stacks/Main';
import { useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { DMMono_400Regular } from '@expo-google-fonts/dm-mono';
import { CharactersProvider } from './src/context/CharacterContext';

function App(): React.JSX.Element {
  useFonts({ Inter_400Regular, DMMono_400Regular });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CharactersProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </CharactersProvider>
    </QueryClientProvider>
  );
}

export default App;
