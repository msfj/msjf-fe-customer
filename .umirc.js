
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'msjf-fe-customer',
      dll: false,
      hardSource: true,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
}
