import React from "react";
import { Image, View } from "react-native";
import { styles } from "./ImageHeader.styled";

export const ImageHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={require("../../assets/images/rick-and-morty.png")}
        style={styles.image}
      />
    </View>
  );
}