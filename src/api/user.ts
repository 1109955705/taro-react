import http from '@/api/http'

export const login = (data = {}) => {
  return http.post('/third/xcx_third_login', data)
}

export const getLastMeasure = () => {
  return http.get('/third/last_third_measurement_detail')
}

export const getHealthToolList = () => {
  return http.get('/health_tools/list_health_tool')
}