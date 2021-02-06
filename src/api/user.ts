import http from './http.js'
export const login = (data = {}) => {
  return http.post('/third/xcx_third_login', data)
}