import AsyncStorage from '@react-native-community/async-storage';

const PREFIX = '@DvhbApp';

class Storage {
  storage = AsyncStorage;

  set(key: string, data?: string) {
    if (data) {
      return this.storage.setItem(`${PREFIX}:${key}`, data);
    }
    return this.storage.removeItem(`${PREFIX}:${key}`);
  }

  get(key: string) {
    return this.storage.getItem(`${PREFIX}:${key}`);
  }
}

export const storage = new Storage();
