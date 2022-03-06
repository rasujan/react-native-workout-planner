import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { getWorkoutDetail } from "~/storage";
import { formatSec } from "~/utils/utils";

import colors from "~/constants/colors";
import { Workout } from "~/types/data";

const HomeScreen = ({ route }: NativeStackHeaderProps) => {
  const slug = (route.params as any)?.slug;
  const [WorkoutDetail, setWorkoutDetail] = useState<Workout>();

  useEffect(() => {
    const getDetail = async () => {
      const _workoutDetail = await getWorkoutDetail(slug);
      setWorkoutDetail(_workoutDetail);
    };

    getDetail();
  }, [slug]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Text style={styles.title}> {WorkoutDetail?.name} </Text>
        <Text style={styles.text}>
          {formatSec(WorkoutDetail?.duration || 0)}
        </Text>
        <Text style={styles.text}> {WorkoutDetail?.difficulty} </Text>
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
  title: {
    color: colors.kindaBlack,
    fontSize: 24,
    textAlign: "left",
    fontFamily: "nunito",
  },
});
export default HomeScreen;
