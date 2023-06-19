import {LoginPayload, RegisterPayload} from '@models/auth';
import axiosClient from './axiosClient';

const authApi = {
  register(data: RegisterPayload): Promise<any> {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  login(data: LoginPayload): Promise<User> {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
};

export default authApi;
