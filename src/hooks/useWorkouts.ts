import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

// import getWorkouts from '~/storage/getWorkouts';
import { Workout } from "~/types/data";

const useWorkouts = () => {
  const isFocused = useIsFocused();
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      /* const _workouts = await getWorkouts();
            setWorkouts(_workouts) */
    }

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};

export default useWorkouts;
