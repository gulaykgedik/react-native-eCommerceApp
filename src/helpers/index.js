import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToStorage = items => {
    AsyncStorage.setItem("cart", JSON.stringify(items));
}

const saveFavoritesToStorage = items => {
    AsyncStorage.setItem("favorites", JSON.stringify(items));
}
export { saveToStorage, saveFavoritesToStorage };