const path = require('path');
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: '宁波类金融业务管理平台',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
  cssLoaderOptions:{
    localIdentName:'[local]'
  },
  targets: {
    ie: 9
  },
  alias: {
    image: path.resolve(__dirname, 'src/assets/'),
    component: path.resolve(__dirname, 'src/component')
  },
  proxy: {
    "/api": {
      target: "http://localhost:91/",
      changeOrigin: true,
      // pathRewrite: { "^/api" : "" }
    },
    '/logout': {
      target: "http://localhost:91/",
      changeOrigin: true,
    }
  }
}
