import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
    try {
        const _stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, _stringValue)
    } catch (e: any) {
        console.error(e)
    }
}

export const getData = async (key: string) => {
    try {
        const _value = await AsyncStorage.getItem(key);
        if (_value !== null) {
            const data = JSON.parse(_value);
            return data;
        }
    } catch (e: any) {
        console.error(e)
    }
}

export const containsKey = async (key: any) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    } catch (e: any) {
        console.error(e)
    }
}