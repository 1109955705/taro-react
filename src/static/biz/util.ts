export const objToStr = (obj, encode = false) => {
  let str = '';
  Object.keys(obj).forEach((key: string) => {
    if (encode) {
      str += `&${key}=${encodeURIComponent(obj[key])}`;
    } else {
      str += `&${key}=${obj[key]}`;
    }
  });
  return str.slice(1);
};

// 字符串的下划线格式转驼峰格式，eg：hello_world => helloWorld
export const underline2Hump = (s) => {
  return s.replace(/_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

// JSON对象的key值转换为驼峰式
export const jsonToHump = (obj) => {
  if (obj instanceof Array) {
    obj.forEach((v) => {
      jsonToHump(v);
    });
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach((key) => {
      const newKey = underline2Hump(key);
      if (newKey !== key) {
        // eslint-disable-next-line no-param-reassign
        obj[newKey] = obj[key];
        // eslint-disable-next-line no-param-reassign
        delete obj[key];
      }
      jsonToHump(obj[newKey]);
    });
  }
  return obj;
};

export default {};
