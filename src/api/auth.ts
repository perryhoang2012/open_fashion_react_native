import {LoginPayload, RegisterPayload} from '@models/auth';
import axiosClient from './axiosClient';
import {User} from '@models/user';
export interface LoginResponse {
  user: User;
  access_token: string;
  message?: string;
}
const authApi = {
  register(data: RegisterPayload): Promise<any> {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  login(data: LoginPayload): Promise<LoginResponse> {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
};

export default authApi;
