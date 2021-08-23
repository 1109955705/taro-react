module.exports = {
  extends: [
    'taro/react',
    'airbnb-typescript',
    'plugin:prettier/recommended', // 禁用与格式化相关的 ESLint 规则, 使用prettier的
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  plugins: ['import'],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    semi: 1,
  },
};
