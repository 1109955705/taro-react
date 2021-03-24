export const objToStr = (obj, encode = false) => {
  let str = ""
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (encode) {
        str += `&${key}=${encodeURIComponent(obj[key])}`
      } else {
        str += `&${key}=${obj[key]}`
      }
    }
  }
  return str.slice(1)
}