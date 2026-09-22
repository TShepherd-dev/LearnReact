// Login.jsx
import { useEffect } from 'react';
import { useAuth } from '../../../auth/AuthProvider.jsx';
import { useLocation, useNavigate } from 'react-router';

export default function Login() {
  const { user, login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname ?? '/';

  useEffect(() => { if (user) navigate(from, { replace: true }); }, [user]);

  return <button onClick={login}>Sign in</button>;
}
