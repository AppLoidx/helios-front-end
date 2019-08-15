module.exports = {
  entry: './jsx/App.jsx',
  mode: "production",
  output: {
    path:
        '/java/helios-backend/src/main/resources/static/js'
        // __dirname + '/js/'
    ,
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }
    ]
  }
};