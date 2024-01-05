import { useMutation, useQueryClient } from 'react-query';
import { postSignIn } from '../../utils/services/auth';

const useAuthQuery = () => {
  const queryClient = useQueryClient();

  const { mutate: postSignInMutation } = useMutation(postSignIn, {
    onSuccess: () => {
      queryClient.invalidateQueries('auth_signIn');
    },
  });
  return { postSignInMutation };
};

export { useAuthQuery };
