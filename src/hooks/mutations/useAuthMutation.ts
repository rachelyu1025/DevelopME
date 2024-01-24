import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { postSignIn } from '../../utils/services/auth';
import { tokenState } from '../../recoil/atoms/authState';
import { setCookie } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';

const useAuthQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const setTokens = useSetRecoilState(tokenState);

  const { mutate: postSignInMutation } = useMutation(postSignIn, {
    onSuccess: res => {
      const tokens = res.data;
      setCookie('accessToken', tokens.accessToken);
      setCookie('refreshToken', tokens.refreshToken);

      setTokens(() => tokens);

      // redirect to home
      navigate('/')

      queryClient.invalidateQueries('auth_signIn');
    },
  });
  return { postSignInMutation };
};

export { useAuthQuery };
