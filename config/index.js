const path = require('path');
// const cssEnv = require('postcss-preset-env');

const config = {
  projectName: 'taro-react',
  date: '2021-2-3',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  // 把文件从源码目录直接拷贝到编译后的生产目录，不使用copy的话不会拷贝到生产目录
  copy: {
    patterns: [{ from: 'src/ext.json', to: 'dist/ext.json' }],
    options: {},
  },
  sass: {
    resource: ['src/static/style/theme.scss'],
    projectDirectory: path.resolve(__dirname, '..'),
    data: '$default-color: black;',
  },
  framework: 'react',
  alias: {
    '@/': path.resolve(__dirname, '..', 'src/'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/static': path.resolve(__dirname, '..', 'src/static'),
    '@/libs': path.resolve(__dirname, '..', 'src/libs'),
    '@/i18n': path.resolve(__dirname, '..', 'src/i18n'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
  },
  mini: {
    esnextModules: ['taro-ui'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
      postcssNesting: {},
    },
    compile: {
      exclude: [path.resolve(__dirname, '..', 'src/libs/index.js')],
    },
    webpackChain(chain) {
      // console.log('chain', chain.module.rules.store.get('nomorlCss').oneOfs.get('0'))
      // chain.merge({
      //   module: {
      //     rule: {
      //       myloader: {
      //         test: /\.md$/,
      //         use: [{
      //           loader: 'raw-loader',
      //           options: {}
      //         }]
      //       }
      //     }
      //   }
      // })
      // chain.merge({
      //   module: {
      //     rule: {
      //       testCss: {
      //         test: /\.(css|wxss|acss|ttss)(\?.*)?$/,
      //         use: [{
      //           loader: 'postcss-loader',
      //           options: {
      //             postcssOptions: {
      //               plugins: [
      //                 [
      //                   'postcss-preset-env',
      //                   {
      //                     // Options
      //                   },
      //                 ],
      //               ],
      //             },
      //           }
      //         }]
      //       }
      //     }
      //   }
      // })
      // console.log('chain', chain.module.rules.store.get('testCss'))
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
