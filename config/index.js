const path = require('path')
const cssEnv = require('postcss-preset-env');

const config = {
  projectName: 'taro-react',
  date: '2021-2-3',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/ext.json', to: 'dist/ext.json' }
    ],
    options: {
    }
  },
  framework: 'react',
  alias: {
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/static': path.resolve(__dirname, '..', 'src/static'),
    '@/libs': path.resolve(__dirname, '..', 'src/libs'),
  },
  mini: {
    esnextModules: ['taro-ui'],
    webpackChain (chain, webpack) {
      chain.merge({
        module: {
          rule: {
            myloader: {
              test: /\.css$/i,
              use: [
                'style-loader',
                'css-loader',
                {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        'postcss-preset-env',
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                }
              }]
            }
          }
        }
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    compile: {
      exclude: [
        path.resolve(__dirname, '..', 'src/libs/index.js')
      ]
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
