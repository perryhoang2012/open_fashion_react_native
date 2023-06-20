import {Timestamp} from './common';

export interface TypeUserSlice {
  access_token?: string;
}
export interface User extends Timestamp {
  id: number;
  username: string;
  email: string;
  phone: string;
  role: Number;
}
