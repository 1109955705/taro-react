module.exports = {
  extends: [
    'taro/react',
    'airbnb-typescript',
    'plugin:prettier/recommended', // 禁用与格式化相关的 ESLint 规则, 使用prettier的
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
  },
};
