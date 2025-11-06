import { useGetMeQuery } from '@hooks/auth/useGetMeQuery';
import type { UserModel } from '@models/user';
import { TokenHelper } from '@utils';
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  authenticate(): void;
  unAuthenticate(): void;
  authenticatedUser?: UserModel;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    authenticatedUser,
    isError,
    isFetching,
    isSuccess,
    removeQuery,
    refetchQuery,
  } = useGetMeQuery();

  const authenticate = useCallback(() => {
    setIsAuthenticated(true);

    refetchQuery();
  }, []);

  const unAuthenticate = useCallback(async () => {
    try {
      const accessTokenHelper = TokenHelper.key('accessTokenKey');
      const refreshTokenHelper = TokenHelper.key('refreshTokenKey');

      await Promise.all([
        accessTokenHelper.remove(),
        refreshTokenHelper.remove(),
      ]);

      setIsAuthenticated(false);
      removeQuery();
    } catch {
      setIsAuthenticated(false);
      removeQuery();
    }
  }, []);

  useLayoutEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && isAuthenticated) {
      Alert.alert('Sua sessão expirou!');
      unAuthenticate().then();
    }
  }, [isError, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        unAuthenticate,
        isLoading: isFetching,
        authenticatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
