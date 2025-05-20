import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {
    name: string;
  };
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
  [route in keyof CharacterDetailsStackParamList]: route;
} = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
};
