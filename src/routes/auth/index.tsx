import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lazy } from 'react';
import type { AuthRoutesSchema } from './AuthRoutesSchema';

const LoginScreen = lazy(() => import('@screens/Login'));
const RegisterScreen = lazy(() => import('@screens/Register'));

const AuthStack = createNativeStackNavigator<AuthRoutesSchema>();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen component={RegisterScreen} name="Register" />
      <AuthStack.Screen component={LoginScreen} name="Login" />
    </AuthStack.Navigator>
  );
}
