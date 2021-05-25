const fs = require('fs');
const path = require('path');

module.exports.pascalCase = (name) => {
  return name.replace(/(\b(\w))|(-\w)/g, (letter) => {
    return letter.substring(letter.length-1).toUpperCase();
  });
}
  
module.exports.camelCase = (name) => {
  return name.replace(/(-\w)/g, (letter) => {
    return letter.substring(1).toUpperCase();
  });
}


module.exports.pascalCase = (name) => {
  return name.replace(/(\b(\w\d))|(-\w)/g, (letter) => {
    return letter.substring(letter.length-1).toUpperCase();
  });
}

// 递归创建目录 同步方法
module.exports.mkdirsSync = function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }

  return false;
};