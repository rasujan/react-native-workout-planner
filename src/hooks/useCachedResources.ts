import { useEffect, useState } from "react";
import { initWorkoutData } from "~/storage";
import * as Font from "expo-font";

import { storeData, containsKey } from "~/storage";
import data from "~/data/data.json";

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        const loadResourcesAndDateAsync = async () => {
            try {
                await initWorkoutData();
                await Font.loadAsync({
                    nunito: require("../../assets/Nunito-Regular.ttf"),
                    "nunito-bold": require("../../assets/Nunito-Regular.ttf"),
                });
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoadingComplete(true);
            }
        };

        loadResourcesAndDateAsync();
    }, []);

    return isLoadingComplete;
};

export default useCachedResources;
