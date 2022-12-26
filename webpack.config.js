
const path = require('path')

module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
      },
      ]
      
    },
    resolve: { extensions: [ '*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
  
  

  };