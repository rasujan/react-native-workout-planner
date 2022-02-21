import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Goto Planner"
        onPress={() => {
          navigation.navigate("Planner");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 32,
  },
});
export default HomeScreen;
