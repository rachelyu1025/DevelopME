import { useMutation, useQueryClient } from 'react-query';
import { postCheckId } from '../../utils/services/auth';
// import { useNavigate } from 'react-router-dom';

const useSignupMutation = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate()

  const { mutate: postCheckIdMutation } = useMutation(postCheckId, {
    onSuccess: res => {
      // redirect to home
      // navigate('/')

      queryClient.invalidateQueries('signup_check_id');
    },
  });
  return { postCheckIdMutation };
};

export { useSignupMutation };
