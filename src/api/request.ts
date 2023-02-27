import { getAccessToken, getRefreshToken } from '@/store/auth/useAuth';
import TokenManager, { injectBearer } from 'brainless-token-manager';
import { extend } from 'umi-request';

const REQ_TIMEOUT = 25 * 1000;

export const PREFIX_API = process.env.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  errorHandler: (error) => {
    throw error?.data || error?.response;
  },
});

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = getAccessToken();

    return token || '';
  },
  getRefreshToken: async () => {
    const refreshToken = getRefreshToken();

    return refreshToken || '';
  },
  executeRefreshToken: async () => {
    return {
      token: '',
      refresh_token: '',
    };
  },
  onRefreshTokenSuccess: ({ token, refresh_token }) => {},
  onInvalidRefreshToken: async () => {
    // Logout
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token
    ? configs?.token
    : ((await tokenManager.getToken()) as string);

  return request(suffixUrl, injectBearer(token, configs));
};

export { request, privateRequest };
