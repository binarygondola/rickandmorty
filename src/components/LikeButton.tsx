import React from 'react';
import { ViewStyle } from 'react-native';
import { RMButton } from './RMButton';
import Ionicons from '@expo/vector-icons/Ionicons';

type LikeButtonProps = {
  onPress: () => void;
  text: string;
  pressed: boolean;
  style?: ViewStyle;
};

export const LikeButton = ({ onPress, text, pressed, style }: LikeButtonProps) => {
  return (
    <RMButton
      style={{ backgroundColor: "#fff", ...style }}
      textColor='#224229'
      onPress={onPress}
      text={text}
      pressed={pressed}
      leftIcon={
        <Ionicons
          name={pressed ? "star-sharp" : "star-outline"}
          size={16}
          color={pressed ? "#F89F34" : "#224229"}
          style={{ marginRight: 8 }}
        />}
    />
  )
}

