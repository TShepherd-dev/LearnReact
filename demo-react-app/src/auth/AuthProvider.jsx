import { useState, useEffect, createContext, useContext } from 'react';
import { mockBff } from '../mock/auth.js';
import Splash from '../views/frontend/Auth/Splash.jsx';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    // mirrors App.vue's mounted() boot: ask the BFF "is there a session?"
    mockBff.getSession()
      .then((s) => s.isAuthenticated && setUser(s.user))
      .catch(() => {})                 // no session - stay logged out
      .finally(() => setIsBootstrapping(false));
  }, []);

  const login = async () => setUser(await mockBff.login());
  const logout = async () => { await mockBff.logout(); setUser(null); };

  if (isBootstrapping) return <Splash />;   // no flash of protected UI

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}