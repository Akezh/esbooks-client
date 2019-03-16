import { AsyncStorage } from 'react-native';

export const removeItem = key => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('AsyncStorage remove item error: ' + error.message);
  }
};

export const saveItem = (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('AsyncStorage save item error: ' + error.message);
  }
};

export const getItem = key => {
  try {
    return AsyncStorage.getItem(key);
  } catch (error) {
    console.error('AsyncStorage get item error: ' + error.message);
  }
};
