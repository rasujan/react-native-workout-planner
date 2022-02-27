import { useEffect, useState } from "react";
import * as Font from "expo-font"

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        const loadResourcesAndDateAsync = async () => {
            try {
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