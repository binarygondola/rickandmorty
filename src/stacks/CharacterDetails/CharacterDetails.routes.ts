import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Character } from '../../interfaces';

import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {
    character: Character;
  };
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};

export type DetailsScreenProps = NativeStackScreenProps<CharacterDetailsStackParamList, 'CharacterDetailsScreen'>;