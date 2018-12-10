import axios from 'axios'
import Vue from 'vue'
// 创建axios实例
const service = axios.create({
  baseURL: "https://zyjxcpx.com/index.php/index/jiang", // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
// service.interceptors.request.use(
//   config => {
//     if (store.state.token) {
//       config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// response 拦截器
service.interceptors.response.use(
  response =>{
    // const res = response.data
    // if(res.code === 40001){
    //   alert('token已经过期')
    //   removeToken()
    //   store.commit('SET_TOKEN','')
    //   location.reload()
    // }else{
    //   //这里面可以设置自定义的返回错误
    //   return response.data
    // }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
