import { api } from '../api';

type SignInType = {
  username: string;
  password: string;
};

const postSignIn = async (params: SignInType) => {
  return api.post(`/api/v1/users/login/`, params);
};

export { postSignIn };
