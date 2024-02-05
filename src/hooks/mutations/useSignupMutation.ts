import { useMutation, useQueryClient } from 'react-query';
import { postCheckEmail, postCheckId, postCheckNickName } from '../../utils/services/auth';
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

  // Id 중복확인 mutation
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

  // nickname 중복확인 mutation
  const { mutate: postCheckNNameMutation, } = useMutation(postCheckNickName, {
    onSuccess: res => {
      if(res.data){
        setIsDisabled(true)
        setErrMsg('')
        setInfoCheckState(prev => ({...prev, nickname: true}))
      }

      queryClient.invalidateQueries('signup_check_nickname');
    },

    onError: (err) => {
      if(axios.isAxiosError(err) && err.response){
        const errorMsg = err.response.data.message

        setErrMsg(errorMsg)
      }
    }
  });

  // email 중복확인 mutation
  const { mutate: postCheckEmailMutation, } = useMutation(postCheckEmail, {
    onSuccess: res => {
      if(res.data){
        setIsDisabled(true)
        setErrMsg('')
        setInfoCheckState(prev => ({...prev, email: true}))
      }

      queryClient.invalidateQueries('signup_check_email');
    },

    onError: (err) => {
      if(axios.isAxiosError(err) && err.response){
        const errorMsg = err.response.data.message

        setErrMsg(errorMsg)
      }
    }
  });
  return { postCheckIdMutation, postCheckNNameMutation, postCheckEmailMutation };
};

export { useSignupMutation };
