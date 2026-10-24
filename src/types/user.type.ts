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
