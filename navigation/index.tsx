import UserStack from './userStack';
import AuthStack from './authStack';
import { useAuth } from '../lib/auth/AuthContext';
export default function RootNavigation() {
    const auth = useAuth();
    return auth?.user ? <UserStack /> : <AuthStack />;
  }