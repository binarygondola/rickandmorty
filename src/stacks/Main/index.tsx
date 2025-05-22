import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetailsStack } from '../CharacterDetails';
import { TabNavigationStack } from '../TabNavigation';
import { MainStackParamList, MainStackRoutes } from './Main.routes';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
      />
      <Stack.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Stack.Navigator>
  );
};
