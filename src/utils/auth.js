import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const sessionName = 'IBASE4JSESSIONID' // 'LKJSESSIONID'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function setSessionID(sessionId) {
  // Cookies.set(sessionName, sessionId, {
  //   domain: '192.168.1.187'
  // })
  return Cookies.set(sessionName, sessionId)
}
export function getSessionID() {
  return Cookies.get(sessionName)
}
export function removeSessionID(sessionId) {
  return Cookies.remove(sessionName)
}
export function setCookies(cn, cv) {
  return Cookies.set(cn, cv)
}
