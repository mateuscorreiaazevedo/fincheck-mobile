import { AuthRoutes } from './auth';
import { PrivateRoutes } from './private';

type RouterNavigationProps = {
  isAuthenticated: boolean;
};

export function RouterNavigation({ isAuthenticated }: RouterNavigationProps) {
  return isAuthenticated ? <PrivateRoutes /> : <AuthRoutes />;
}
