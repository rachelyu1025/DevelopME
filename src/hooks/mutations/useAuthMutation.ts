import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { postSignIn } from '../../utils/services/auth';
import { tokenState } from '../../recoil/atoms/authState';
import { setCookie } from '../../utils/cookies';

const useAuthQuery = () => {
  const queryClient = useQueryClient();

  const setTokens = useSetRecoilState(tokenState);

  const { mutate: postSignInMutation } = useMutation(postSignIn, {
    onSuccess: res => {
      const tokens = res.data.token;
      setCookie('accessToken', tokens.access);
      setCookie('refreshToken', tokens.refresh);

      setTokens(() => tokens);

      alert('Login Successed!');
      queryClient.invalidateQueries('auth_signIn');
    },
  });
  return { postSignInMutation };
};

export { useAuthQuery };
