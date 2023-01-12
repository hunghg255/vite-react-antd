import { getAccessToken } from '@/store/auth/useAuth';
import { extend } from 'umi-request';
import TokenManagement from './tokenManagement';

const REQ_TIMEOUT = 25 * 1000;

export const PREFIX_API = process.env.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  errorHandler: (error) => {
    throw error?.data || error?.response;
  },
});

const injectBearer = (token: string, configs: any) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  if (configs?.headers?.Authorization) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
      },
    };
  }

  if (configs?.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    // try {
    //   const token = getAccessToken();

    //   const decoded = parseJwt(token);
    //   const { exp } = decoded;

    //   const currentTime = Date.now() / 1000;

    //   if (exp - 5 > currentTime) {
    //     return true;
    //   }

    //   return false;
    // } catch (error) {
    //   return false;
    // }

    return true;
  },
  getAccessToken: () => {
    const token = getAccessToken();

    return token || '';
  },
  onRefreshToken() {
    // const localInfo = window?.localStorage.getItem(ENV.LOCAL_STORAGE_KEY as string);
    // let localInfoObject;
    // if (localInfo) {
    //   localInfoObject = JSON.parse(localInfo);
    // }
    // const refreshToken = localInfoObject?.refreshToken;
    // if (!refreshToken) {
    //   return done(null);
    // }
    // request
    //   .post('/auth/refreshToken', {
    //     data: {
    //       refreshToken,
    //     },
    //   })
    //   .then((result) => {
    //     if (result.refreshToken && result.accessToken) {
    //       done(result.accessToken);
    //       return;
    //     }
    //     done(null);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     done(null);
    //   });
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token
    ? configs?.token
    : ((await TokenManager.getToken()) as string);

  return request(suffixUrl, injectBearer(token, configs));
};

export { request, privateRequest };
