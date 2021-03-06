module.exports = {//具体配置可参考官网

	publicPath:'/',//打包后可以被部署到任意路径
	outputDir:'dist',//打包目录
	assetsDir:'',//静态资源目录
	indexPath:'index.html',
	filenameHashing:'true',//生成文件以hash控制缓存，设为false可关闭

	// pages: {
	// 	index: {
	//       // page 的入口
	//       entry: 'src/index/main.js',
	//       // 模板来源
	//       template: 'public/index.html',
	//       // 在 dist/index.html 的输出
	//       filename: 'index.html',
	//       // 当使用 title 选项时，
	//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	//       title: 'Index Page',
	//       // 在这个页面中包含的块，默认情况下会包含
	//       // 提取出来的通用 chunk 和 vendor chunk。
	//       chunks: ['chunk-vendors', 'chunk-common', 'index']
	//     },
 //    // 当使用只有入口的字符串格式时，
 //    // 模板会被推导为 `public/subpage.html`
 //    // 并且如果找不到的话，就回退到 `public/index.html`。
 //    // 输出文件名会被推导为 `subpage.html`。
 //    subpage: 'src/subpage/main.js'
 //  },
	lintOnSave: true,// 是否在保存的时候检查
    productionSourceMap: true,// 生产环境是否生成 sourceMap 文件
    css: {
        // extract: true,// 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,// 开启 CSS source maps
        loaderOptions: {},// css预设器配置项
        modules: false// 启用 CSS modules for all css / pre-processor files.
      },
    devServer: {// 环境配置
    	host: '0.0.0.0',
    	port: 8080,
    	// https: true,
    	hotOnly: false,
        open: true, //配置自动启动浏览器
        proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            '/api': {
                target: 'https://apply.idaonline.cn/api',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    "^/api":''
                }
            },
        }
    },
    pluginOptions: {
      i18n: {
        locale: 'zh',
        fallbackLocale: 'zh',
        localeDir: 'lang',
        enableInSFC: false
      }
    },
    transpileDependencies:[

    ]
};
