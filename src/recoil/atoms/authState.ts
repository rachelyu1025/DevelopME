import { atom } from 'recoil';

export interface SignupInfoStateType {
  id: boolean
  nickName: boolean
  password: boolean
  email: boolean
}


// 회원가입
const signUpState = atom({
  key: 'signUpState',
  default:  false
})

const signupInfoCheckState = atom<SignupInfoStateType>({
    key: 'signupInfoCheckState',
    default: {
    id: false,
    nickName: false,
    password: false,
    email: false
  }
  })


// 토큰
const tokenState = atom({
  key: 'tokenState',
  default: {
    accessToken: '',
    refreshToken: '',
  },
});

export { signUpState,signupInfoCheckState, tokenState };
