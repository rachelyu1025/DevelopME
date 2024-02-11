import { api } from '../api';

type SignInType = {
  username: string;
  password: string;
};


// 로그인
const postSignIn = async (params: SignInType) => {
  return api.post(`/api/login`, params);
};


// 회원가입 
// 중복 & 유효성 검사 
const postCheckId = async (params: {username: string}) => {
  return api.post(`/api/members/username/check`, params);
};

const postCheckNickName = async (params: {nickname: string}) => {
  return api.post(`/api/members/nickname/check`, params);
};

const postCheckEmail = async (params: {email: string}) => {
  return api.post(`/api/members/email/check`, params);
};

export { postSignIn, postCheckId, postCheckNickName, postCheckEmail };
