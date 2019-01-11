import Cookies from 'js-cookie';

const TokenKey = 'access-token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setCookie(key, val) {
  Cookies.set(key, val);
}

export function getCookie(key, val) {
  return Cookies.get(key, val);
}

export function clearCookie() {
  document.cookie = '';
}

export function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
