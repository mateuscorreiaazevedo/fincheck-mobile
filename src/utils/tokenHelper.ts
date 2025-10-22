import { STRING_CONSTANTS } from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class TokenHelper {
  private key = '';

  static setKey(key: keyof (typeof STRING_CONSTANTS)['token']): TokenHelper {
    const instance = new TokenHelper();
    instance.key = STRING_CONSTANTS.token[key];
    return instance;
  }

  async set(token: string): Promise<void> {
    await AsyncStorage.setItem(this.key, token);
  }

  get() {
    return AsyncStorage.getItem(this.key);
  }

  async remove() {
    await AsyncStorage.removeItem(this.key);
  }
}
