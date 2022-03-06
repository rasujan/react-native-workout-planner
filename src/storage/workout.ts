import { filter, head } from "lodash";
import { getData, containsKey, storeData, removeItem } from "./storage";

import data from "~/data/data.json";
import { Workout } from "~/types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const _workouts = await getData("workout-data");
  return _workouts;
};

export const getWorkoutDetail = async (
  slug: string
): Promise<Workout | undefined> => {
  const _workouts = await getWorkouts();

  const _workoutDetail = head(filter(_workouts, { slug: slug }));

  return _workoutDetail;
};

export const initWorkoutData = async (): Promise<boolean> => {
  const _hasWorkouts = await containsKey("workout-data");
  if (!_hasWorkouts) {
    await storeData("workout-data", data);
    return true;
  } else {
    return false;
  }
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
