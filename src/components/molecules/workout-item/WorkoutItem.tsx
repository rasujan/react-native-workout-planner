import react from "react";
import { StyleSheet, Text, View } from "react-native";

import { Workout } from "~/types/data";
import colors from "~/constants/colors";

const WorkoutItem = ({ item }: { item: Workout }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
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
  },
  subtitle: {
    fontSize: 16,
  },
});

export default WorkoutItem;
