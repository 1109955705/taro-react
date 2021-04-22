const pascalCase = (name) => {
    return name.replace(/(\b(\w\d))|(-\w)/g, (letter) => {
        return letter.substring(letter.length-1).toUpperCase();
    });
  }
  
  const camelCase = (name) => {
    return name.replace(/(-\w)/g, (letter) => {
        return letter.substring(1).toUpperCase();
    });
  }