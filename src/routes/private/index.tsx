import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { lazy } from 'react';
import type { PrivateRoutesSchema } from './AuthRoutesSchema';

const DashboardScreen = lazy(() => import('@screens/Dashboard'));

const PrivateStack = createNativeStackNavigator<PrivateRoutesSchema>();

export function PrivateRoutes() {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen component={DashboardScreen} name="Dashboard" />
    </PrivateStack.Navigator>
  );
}
