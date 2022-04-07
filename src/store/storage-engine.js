import AsyncStorage from '@react-native-async-storage/async-storage';

const storeEngine = {
  getItem: async key => {
    const value = await AsyncStorage.getItem(key);

    return value != null ? JSON.parse(value) : null;
  },
  setItem: async (key, data) => {
    const value = JSON.stringify(data);

    await AsyncStorage.setItem(key, value);
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};

export default storeEngine;
