# taro-react

使用 taro 的测试

自动更新 测试服 体积会比较大, 一般会超出2m大小, 没法在手机上编译调试, 一般在开发者工具上调试完执行下面的命令进行真机调试
taro build --type weapp --watch

自动更新并压缩 正式服 热更新有问题而且比较慢, 不建议在这个模式下开发调试
NODE_ENV=production taro build --type weapp --watch

react + ts + redux 
代码校验：eslint + prettier + stylelint + husky + lint-staged

ahook
https://ahooks.js.org/zh-CN/hooks/async


目录

```
├─ .husky/           # husky 配置目录
├─ build/            # webpack 配置目录
├─ config/           # webpack 配置目录
│   ├─ dev.js        # 开发环境配置
│   ├─ index.js      # 通用配置
│   ├─ prod.js       # 线上环境配置
├─ dist/             # 编译后的目录
├─ src/              # 代码目录（开发都在这里进行）
│   ├─ assets/          # 静态文件
│   │   ├─ iconfont        # 图标资源 
│   │   ├─ images          # 图片资源
│   ├─ components/     # 组件目录（COMPONENT）
│   ├─ custom-tab-bar/   # 自定义底部栏
│   ├─ store/   # redux
│   │   ├─ actions/      # （ACTION）
│   │   ├─ constants/    # （CONSTANTS）
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ index.ts/     # （STORE）
│   ├── hooks/        # 常用封装的hooks
│   ├── i18n/      # 多语言
│   ├── pages/         # 页面集合
│   ├── static/        # 常用方法
│   ├── typings/       # ts类型声明
│   ├── global.d.ts    # 全局ts声明
│   ├── index.html     # 默认编译的html
├── babel.config.js     # Babel 转码配置
├── .eslintignore       # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc.js        # ESLint 配置
├── .prettierignore     # （配置）prettier 检查中需忽略的文件（夹）
├── .prettier.js        # prettier 配置
├── .stylelintrc.js     # ESLint 配置
├── .gitignore          # （配置）需被 Git 忽略的文件（夹）
├── tsconfig.json       # ts配置文件
├── package.json        # 项目配置文件
```
