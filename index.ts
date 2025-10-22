import { registerRootComponent } from 'expo';
import { AppRegistry, Platform } from 'react-native';
import { App } from './src/app';

registerRootComponent(App);

const appName = 'App';

if (Platform.OS === 'ios' || Platform.OS === 'android') {
  AppRegistry.registerComponent(appName, () => App);
}
