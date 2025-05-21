import React from "react";
import { Image, View } from "react-native";

export const ImageHeader = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#162C1B' }}>
      <Image
        resizeMode='contain'
        source={require("../../assets/images/rick-and-morty.png")}
        style={{ marginLeft: 16, marginVertical: 24, height: 32, width: 104 }} />
    </View>
  );
}