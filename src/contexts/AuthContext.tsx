import { TokenHelper } from '@utils';
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login(): void;
  logout(): void;
  register(): void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    setGlobalLoading(true);
    try {
      const accessTokenHelper = TokenHelper.setKey('accessTokenKey');
      const refreshTokenHelper = TokenHelper.setKey('refreshTokenKey');

      await Promise.all([
        accessTokenHelper.remove(),
        refreshTokenHelper.remove(),
      ]);

      setIsAuthenticated(false);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setGlobalLoading(false);
    }
  }, []);

  const register = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    async function load() {
      const accessTokenHelper = TokenHelper.setKey('accessTokenKey');
      const accessToken = await accessTokenHelper.get();

      if (accessToken) {
        setIsAuthenticated(true);
      }
      setGlobalLoading(false);
    }

    load();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        register,
        isLoading: globalLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
