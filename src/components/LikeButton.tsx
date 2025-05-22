import React from 'react';
import { ViewStyle } from 'react-native';
import { RMButton } from './RMButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colorScheme } from '../colorScheme';

interface LikeButtonProps {
  onPress: () => void;
  text: string;
  pressed: boolean;
  style?: ViewStyle;
};

export const LikeButton = ({ onPress, text, pressed, style }: LikeButtonProps) => {
  return (
    <RMButton
      style={{ backgroundColor: "#fff", ...style }}
      textColor={colorScheme.primaryGreen}
      onPress={onPress}
      text={text}
      pressed={pressed}
      leftIcon={
        <Ionicons
          name={pressed ? "star-sharp" : "star-outline"}
          size={16}
          color={pressed ? colorScheme.accent : colorScheme.primaryGreen}
          style={{ marginRight: 8 }}
        />
      }
    />
  )
}

