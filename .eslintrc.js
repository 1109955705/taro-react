module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // console提示
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // debug提示
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'no-undef': 1, // 未声明变量报错提示, 会错误提示全局声明的global, 本身ts会提示，建议关闭
    'react/prop-types': 'off',
    'react/state-in-constructor': [1, 'never'],
    '@typescript-eslint/indent': ['error', 2],
    'no-use-before-define': 'off',
    // 禁止出现无用的表达式
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true, // 允许使用 a() || b 或 a && b()
        allowTernary: true, // 允许在表达式中使用三元运算符
        allowTaggedTemplates: true, // 允许标记模板字符串
      },
    ],

    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': ['error', 'never'],
  },
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
  },
};
