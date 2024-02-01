import { useMutation, useQueryClient } from 'react-query';
import { postCheckId } from '../../utils/services/auth';
import axios from 'axios';
import { signupInfoCheckState } from '../../recoil/atoms/authState';
import { useRecoilState } from 'recoil';

interface SignupMutationProp {
setErrMsg : React.Dispatch<React.SetStateAction<string>>
setIsDisabled : React.Dispatch<React.SetStateAction<boolean>>
}

const useSignupMutation = ({setErrMsg, setIsDisabled}:SignupMutationProp) => {
  const queryClient = useQueryClient();

  const [infoCheckState, setInfoCheckState]=useRecoilState(signupInfoCheckState)

  const { mutate: postCheckIdMutation, } = useMutation(postCheckId, {
    onSuccess: res => {
      if(res.data){
        setIsDisabled(true)
        setErrMsg('')
        setInfoCheckState(prev => ({...prev, id: true}))
      }

      queryClient.invalidateQueries('signup_check_id');
    },

    onError: (err) => {
      if(axios.isAxiosError(err) && err.response){
        const errorMsg = err.response.data.message

        setErrMsg(errorMsg)
      }
    }
  });

  return { postCheckIdMutation };
};

export { useSignupMutation };
