import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import colors from "~/constants/colors";

const HomeScreen = ({ route }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Text style={styles.text}>
          Workout Detail - {(route.params as any)?.slug}
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },
  text: {
    color: colors.kindaBlack,
    fontSize: 18,
    textAlign: "left",
    fontFamily: "nunito",
  },
});
export default HomeScreen;
