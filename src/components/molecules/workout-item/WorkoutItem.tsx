import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

import { formatSec } from "~/utils/utils";

import { Workout } from "~/types/data";
import colors from "~/constants/colors";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>Duration: {formatSec(item.duration)}</Text>
      <Text style={styles.subtitle}>Difficulty: {item.difficulty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.kindaWhite,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "nunito-bold",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "nunito",
  },
});

export default WorkoutItem;
