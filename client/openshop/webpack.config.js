let glob = require('glob')
let path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

let getEntry = (globPath, pathDir) => {
    let files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename, pathname, extname;
    for(var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(pathDir, '') : pathname;
        entries[pathname] = './' +  entry;
    }
    return entries;
}
var htmls = getEntry('./src/views/**/*.html', 'src\\views\\');
var entries = {};
var htmlPlugin = [];
for (var key in htmls) {
    entries[key] = htmls[key].replace('.html', '.js')
    HtmlPlugin.push(new HtmlWebpackPlugin({
      filename: (key == 'index\\index' ? 'index.html' : key + '.html'), 
      template: htmls[key],
      inject: true,
        chunks: [key]
    }))
}
module.exports = {
    entry: entries,
    output: {
        path: __dirname + '/dist/js',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.js/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|gif|jpg?e)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
                    }
                ]
            }
        ]
    },
    plugins: [
        ...htmlPlugin
    ]
}