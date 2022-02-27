import react from "react";
import { StyleSheet, Text, View } from "react-native";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

import { Workout } from "~/types/data";
import colors from "~/constants/colors";

const WorkoutItem = ({ item }: { item: Workout }) => {
  var seconds = item.duration;
  var duration = moment.duration(seconds, "seconds").format("hh:mm:ss");
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>Duration: {duration}</Text>
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
