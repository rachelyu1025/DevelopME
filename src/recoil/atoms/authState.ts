import { atom } from 'recoil';

export interface SignupInfoStateType {
  id: boolean
  nickName: boolean
  password: boolean
  email: boolean
}

const signupInfoState = atom ({
  key: 'signupInfoState',
    default: {
    username: '',
    nickname: '',
    password1: '',
    password2: '',
    email: ''
  }
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

export { signupInfoState, signupInfoCheckState, tokenState };
