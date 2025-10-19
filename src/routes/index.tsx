import { AuthRoutes } from './auth';
import { PrivateRoutes } from './private';

export function RouterNavigation() {
  const isAuthenticated = false;

  return isAuthenticated ? <PrivateRoutes /> : <AuthRoutes />;
}
