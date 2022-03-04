import { getData, containsKey, storeData } from '~/storage';

import data from "~/data/data.json";
import { Workout } from '~/types/data';

export const getWorkouts = async (): Promise<Workout[]> => {
    const _workouts = await getData("workout-data")
    return _workouts;
}

export const initWorkoutData = async (): Promise<boolean> => {

    const _hasWorkouts = await containsKey("workout-data")
    if (!_hasWorkouts) {
        await storeData("workout-data", data)
        return true;
    } else {
        return false
    }

}