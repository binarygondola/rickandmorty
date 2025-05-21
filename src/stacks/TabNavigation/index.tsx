import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CharacterListScreen } from './screens/CharacterList';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#DAE4DC',
        tabBarActiveBackgroundColor: '#224229',
        tabBarInactiveBackgroundColor: '#162C1B',
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
