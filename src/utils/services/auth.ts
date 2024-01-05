import api from '../api';

type SignInType = {
  username: string;
  password: string;
};

const postSignIn = async (params: SignInType): Promise<void> => {
  await api.post(`/api/v1/users/login/`, params);
};

export { postSignIn };
