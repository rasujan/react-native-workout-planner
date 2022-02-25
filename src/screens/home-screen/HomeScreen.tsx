import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { WorkoutItem } from "~/components/molecules";

import data from "~/data/data.json";
import { Workout } from "~/types/data";
import colors from "~/constants/colors";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <FlatList
          data={data as unknown as Workout[]}
          renderItem={WorkoutItem}
          keyExtractor={(item) => item.slug}
        />
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
  },
});
export default HomeScreen;
