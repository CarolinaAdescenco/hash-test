const path = require('path');

module.exports  = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        port: 9000
    },
    performance: {
      hints: false
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        '@babel/preset-react'
                        ]
                    }
                }]
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
        ]
    }
}
