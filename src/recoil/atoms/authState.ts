import { atom } from 'recoil';

// 회원가입
const signUpState = atom({
  key: 'signUpState',
  default:  false
})


// 토큰
const tokenState = atom({
  key: 'tokenState',
  default: {
    accessToken: '',
    refreshToken: '',
  },
});

export { signUpState,tokenState };
