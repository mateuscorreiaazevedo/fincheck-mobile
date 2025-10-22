import { AuthContext } from '@contexts';
import { use } from 'react';

export function useAuthentication() {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuthentication must be used within an AuthProvider');
  }
  return { ...context };
}
