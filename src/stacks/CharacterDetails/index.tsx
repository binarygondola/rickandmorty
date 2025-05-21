import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CharacterDetailsStackParamList, CharacterDetailsStackRoutes } from './CharacterDetails.routes';
import { CharacterDetailsScreen } from './screens';

const Stack = createNativeStackNavigator<CharacterDetailsStackParamList>();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
