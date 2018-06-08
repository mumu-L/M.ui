const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'),
		 { VueLoaderPlugin } = require('vue-loader')
let CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
	entry: "./src/index.es6",
	mode:process.argv[2]=='--dev'?'development':'production',
	output: {
		path: path.resolve(__dirname + '/../dist/'),
		filename: 'main.js',
		publicPath:'/build/'
	},
	devServer:{
		inline:true,
		publicPath:'/build/'
	},
	module: {
		rules: [
		  {
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		  },{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
				  presets: ['babel-preset-env'],
				  plugins: [require('babel-plugin-transform-object-rest-spread')]
				}
			}
		  },{
			test: /\.html$/,
			exclude: /node_modules/,
			use: {
				loader: 'html-loader'
			}
		  },{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
          },{
            test: /\.less$/,
            use: [
			  'style-loader',
			  { 
				  loader: 'css-loader',
				  options: { importLoaders: 1 } 
			  },
			  'less-loader'
            ]
          },{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
				  js: 'babel-loader', 
				  scss: ['style-loader','css-loader','sass-loader'],
				  sass: ['style-loader','css-loader','sass-loader?indentedSyntax']
				 
				}
		    }
         },{
			test: /\.es6/,
			loader: 'babel-loader'
         },{  
            test:/\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)|(otf)|(woff2)$/,  
            use: [  
               {  
                 loader: "url-loader",  
                  options: {  
                     limit:50000,   //小于50K的 都打包  
                     name:"[hash:8].[name].[ext]",  
                     publicPath:"/static/img/",  //替换CSS引用的图片路径 可以替换成爱拍云上的路径  
                     outputPath:"../static/img/"        //生成之后存放的路径  
                  }  
               }  
            ]  
            }
		]
	},
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js',
			'@':path.resolve(__dirname,'../'),
			'$':'jquery',
			"jQuery":'jquery'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
		title: 'M-ui',
		inject: true,
		filename: '../default.html',
		template: 'index.ejs'
	    }),
		new VueLoaderPlugin(),//不配置VueLoaderPlugin编译时报错	 
		new CopyWebpackPlugin([{
			from: 'node_modules/mavon-editor/dist/highlightjs',
			to: path.resolve(__dirname, '../dist/highlightjs'), // 插件将会把文件导出于/dist/highlightjs之下
			}, {
					from: 'node_modules/mavon-editor/dist/markdown',
					to: path.resolve(__dirname, '../dist/markdown'), // 插件将会把文件导出于/dist/markdown之下
			}, {
					from: 'node_modules/mavon-editor/dist/katex', // 插件将会把文件导出
					to: path.resolve(__dirname, '../dist/katex')
			}])
			
	]
		
}
