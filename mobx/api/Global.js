import axios from 'axios'
import Cookies from 'js-cookie'

const config = {
  // baseUrl: 'http://192.168.1.10/projects/moverii/admin/public/',
  baseUrl: 'http://192.168.1.175:8000/',
  udata: Cookies.get('token'),
  axiosHandle: () => {
    return axios.create({
      baseURL: config.baseUrl,
      validateStatus: function (status) {
        if (status == 401) {
          localStorage.clear()
          Cookies.remove('token')
          Cookies.remove('token_type')
          Cookies.remove('expires_at')
          window.location.href = '/login'
        }
        return status >= 200 && status < 300
      },
      headers: config.udata
        ? {
            Authorization: 'Bearer' + ' ' + config.udata,
          }
        : {},
    })
  },
}
export default config
