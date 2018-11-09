const path = require('path');  
module.exports = { 
  entry: './client/index.js', 
  output:{ 
    path: path.join(__dirname, './public'), 
    filename: 'bundle.js' 
  }, 
  module: { 
    loaders: [ 
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: { 
        loader: "babel-loader" 

    } 
  } ,
  {
    test: /\.css$/,
    loader:"style-loader!css-loader" 
  }
  ] 
} 
}; 


