//封装ajax请求，返回pramise对象
import axios from 'axios'
export default function ajax(url,data={},method='get'){
    return new Promise((reslove,reject)=>{
      let promise
      // 执行异步ajax请求
      if (method === 'GET') {
        promise = axios.get(url, {
          params: data
        }) // params配置, 指定的是query参数
      } else {
        promise = axios.post(url, data)
      }

      promise.then(     //成功时调用reslove回调函数
        (response)=>
          reslove(response.data)
      ),
      error => { // 如果失败了, 不调用reject(), 而是提示错误信息
        alert('请求异常: ' + error.message)
      }

    })
}