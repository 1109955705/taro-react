interface taroRequest {
  timeout?: number
  success?: (res: any) => void
  fail?: (res: any)=> void
  complete?: (res: any)=> void
}
module.exports= (fn)=>{
  return (obj: taroRequest = {})=>{
    return new Promise((resolve,reject)=>{
      obj.success=(res)=>{
        resolve(res)
      }
      obj.fail=(err)=>{
        reject(err)
      }
      fn(obj)
    })
  }
}