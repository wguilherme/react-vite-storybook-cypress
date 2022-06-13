import {api} from './api';
import localStorage from './localStorage';

async function onSignIn(token: any) {
  await localStorage.setItem('token', token)
}

async function isSignedIn() {
  const token = await localStorage.getItem('token')
  return (token !== null) ? true : false;
}

async function getUser() {
  const token = await localStorage.getItem('token')
  if (!token) return false
  const res = await api.get('/user/me')
  return res.data
}

async function getHeaderConfig() {
  const token = await localStorage.getItem('token')
  if (!token) return {}
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config
}

async function onSignOut() {
  try{
    await api.post('/user/me/logout', null)
  }catch(error) {
    return true
  } finally {
    await localStorage.removeItem('token')
    return true
  }
}

export default { onSignIn, onSignOut, isSignedIn, getUser, getHeaderConfig }