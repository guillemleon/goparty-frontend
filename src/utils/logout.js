import {useAuth} from '../context/Auth';

const {authStatusLogout} = useAuth();

export const logout = () => {
  authStatusLogout();
};
