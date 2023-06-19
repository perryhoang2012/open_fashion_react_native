export interface RegisterPayload extends LoginPayload {
  phone?: string;
  username?: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
