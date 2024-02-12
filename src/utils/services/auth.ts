import { api } from '../api';

interface SignInType {
  username: string;
  password: string;
};

interface SignUpInfoType {
  username: string
  nickname: string
  password1: string
  password2: string
  email: string
}

// 로그인
const postSignIn = async (params: SignInType) => {
  return api.post(`/api/login`, params);
};

// 회원가입 
const postSignUp = async (params :SignUpInfoType) => {
  return api.post(`/api/signup`, params);
};

//회원가입 중복 & 유효성 검사 
// id 중복/유효성검사
const postCheckId = async (params: {username: string}) => {
  return api.post(`/api/members/username/check`, params);
};

// 닉네임 중복/유효성검사
const postCheckNickName = async (params: {nickname: string}) => {
  return api.post(`/api/members/nickname/check`, params);
};

// email 중복/유효성검사
const postCheckEmail = async (params: {email: string}) => {
  return api.post(`/api/members/email/check`, params);
};

export { postSignIn,postSignUp, postCheckId, postCheckNickName, postCheckEmail };
