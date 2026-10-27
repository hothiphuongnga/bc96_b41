export type UserType = {
  key: number;
  id: number;
  email: string;
  name: string;
  password?: string;
  gender: boolean;
  phone: string;
  facebookId: string;
  userTypeId?: string;
  deleted: boolean;
  avatar: string;
  favoriteProducts?: string;
}

export type SignInPayload = {
  email: string;
  password: string;
}
export type SignInResponse = {
  email: string;
  accessToken: string;
}

export type UserProfile = {
  ordersHistory: unknown[];
  email: string;
  name: string;
  password: null;
  gender: boolean;
  phone: string;
  facebookId: string;
  deleted: boolean;
  avatar: string;
  image: string;
};

