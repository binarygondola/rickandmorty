import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { colorScheme } from '../colorScheme';
import { styles } from './RMButton.styled';

interface RMButtonProps {
  leftIcon?: JSX.Element;
  onPress: () => void;
  pressed: boolean;
  rightIcon?: JSX.Element;
  short?: boolean;
  style?: ViewStyle;
  text: string;
  textColor?: string;
};
export const RMButton = ({
  onPress,
  text,
  rightIcon,
  pressed,
  style,
  leftIcon,
  textColor,
  short,
}: RMButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[{
        backgroundColor: pressed ? colorScheme.darkGreen : colorScheme.primaryGreen,
        alignSelf: short ? "flex-start" : "stretch",
      }, styles.buttonStyle, style]}
    >
      {leftIcon}
      <Text style={[styles.textStyle, { color: textColor ?? "#fff" }]}>{text}</Text>
      {rightIcon}
    </Pressable>
  )
}
