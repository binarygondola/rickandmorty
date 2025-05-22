import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CharacterListScreen } from './screens/CharacterList/CharacterList.screen';
import { colorScheme } from '../../colorScheme';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colorScheme.greyshGreen,
        tabBarActiveBackgroundColor: colorScheme.primaryGreen,
        tabBarInactiveBackgroundColor: colorScheme.darkGreen,
      })}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          tabBarLabel: 'ALL CHARACTERS',
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={() => ({
          tabBarLabel: 'LIKED CHARACTERS',
          tabBarIcon: ({ color }) => <Ionicons name="star" size={24} color={color} />
        })}
      />
    </Tab.Navigator>
  );
};
