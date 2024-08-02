import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ImageRound(props) {
    return (
      <Image
        name = {props.name}
        source={{ uri: props.uri }} 
        style={styles.image}/>
    );
  }

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
