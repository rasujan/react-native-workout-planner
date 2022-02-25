import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function App({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Planner</Text>
      <Button
        title="Goto HOme"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 20,
  },
});
