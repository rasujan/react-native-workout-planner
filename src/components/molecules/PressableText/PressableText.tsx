import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

import colors from "~/constants/colors";

const PressableText = (props: any) => {
  const { onPress, text } = props;

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.kindaBlack,
    fontSize: 18,
    textAlign: "left",
    fontFamily: "nunito",
  },
});

export default PressableText;
