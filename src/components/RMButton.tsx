import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

type RMButtonProps = {
  onPress: () => void;
  text: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  pressed: boolean;
  short?: boolean;
  style?: ViewStyle;
  textColor?: string;
};

export const RMButton = ({ onPress, text, rightIcon, pressed, style, leftIcon, textColor, short }: RMButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[{
        flexDirection: "row",
        backgroundColor: pressed ? "#162C1B" : "#224229",
        alignSelf: short ? "flex-start" : "stretch",
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 32,
      }, style]}
    >
      {leftIcon}
      <Text style={{ color: textColor ?? 'white', fontFamily: "DMMono_400Regular", fontSize: 14 }}>{text}</Text>
      {rightIcon}
    </Pressable>
  )
}
