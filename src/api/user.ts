import http from '@/api/http.ts'
export const login = (data = {}) => {
  return http.post('/third/xcx_third_login', data)
}