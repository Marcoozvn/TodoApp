import { AsyncStorage } from 'react-native';
import Api from './Api';

export async function onSignIn(userInfo) {
  return await Api.post('/login', userInfo);
}

export function onSignOut() {
  AsyncStorage.removeItem('token');
}

export async function onSignUp(userInfo) {
  return await Api.post('/register', userInfo);
}

export function getToken() {
  return AsyncStorage.getItem('token');
}

export function setToken(token) {
  AsyncStorage.setItem('token', token);
}

export async function getHeader() {
  return {
    headers: {
      token: AsyncStorage.getItem('token')
    }
  }
}