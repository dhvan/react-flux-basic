module.exports = {
    entry: ['./src/ProductData.js', './src/App.js', './src/actions/ProductActions.js',
        './src/components/Product.react.js', './src/components/ProductApp.react.js',
        './src/constants/ProductConstants.js', './src/dispatcher/AppDispatcher.js',
         './src/stores/CartStore.js', './src/stores/ProductStore.js', './src/utils/ProductAPI.js'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  }
};