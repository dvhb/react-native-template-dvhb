import Config from 'react-native-config';
import { UserApi, Configuration } from '../api/src';
const basePath = Config.BASE_PATH;

class UserApiSingleton extends UserApi {
  init(apiKey?: string) {
    this.configuration = new Configuration({ basePath, apiKey });
  }
}

export const apiUser = new UserApiSingleton();
