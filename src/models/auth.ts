export interface RegisterPayload {
  phone: string;
  email: string;
  confirmPassword: string;
  password: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
