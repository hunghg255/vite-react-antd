import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from './../../routes/route.constant';

export interface IAuth {
  loading?: boolean;
  token: string | null;
  refreshToken?: string | null;
  expiredTime: number;
}

const getAuthLocalStorage = () => {
  try {
    const authData = localStorage.getItem(process.env.LOCAL_STORAGE_KEY);
    return authData && JSON.parse(authData);
  } catch {}
};

export const getAccessToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.token || '';
};

export const getRefreshToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.refreshToken || '';
};

const setAuthData = (data: IAuth): void => {
  localStorage.setItem(process.env.LOCAL_STORAGE_KEY as string, JSON.stringify(data));
};

const onLogout = async () => {};

export const useAuth = () => {
  const navigate = useNavigate();

  const onLogin = (data: IAuth) => {
    try {
      setAuthData(data);
      navigate(ROUTE_PATH.REPORT);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return {
    isLogin: !!getAccessToken(),
    setAuthData,
    onLogin,
    onLogout,
  };
};
