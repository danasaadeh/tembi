export type AuthPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  refresh_token: string;
};

export type UserProfile = {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
};

export type SignUpPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
};

export type SignUpResponse = {
  code: string;
  message: string;
  data: any[];
  status: boolean;
};
