import { useAuth } from './AuthProvider.jsx';
import { Navigate, Outlet, useLocation } from 'react-router';

export default function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login"
      state={{ from: location }}
      replace />;
  }
  return <Outlet />;
}