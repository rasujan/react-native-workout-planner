import { useEffect, useState } from "react";
import * as Font from "expo-font"

import { storeData, getData, containsKey } from '~/storage';
import data from "~/data/data.json"

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        const loadResourcesAndDateAsync = async () => {
            try {
                const hasWorkouts = await containsKey("workout-data")
                if (!hasWorkouts) {
                    await storeData("workout-data", data)
                }
                await Font.loadAsync({
                    "nunito": require("../../assets/Nunito-Regular.ttf"),
                    "nunito-bold": require("../../assets/Nunito-Regular.ttf")
                })
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoadingComplete(true)
            }
        }

        loadResourcesAndDateAsync()
    }, [])

    return isLoadingComplete;
}

export default useCachedResources;