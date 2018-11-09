const express = require('express');
const proxy = require('http-proxy-middleware');
const path =require('path');
const app = express();



const port = 3000;
const publicDir = path.join(__dirname, 'public');

const options = {
  target: 'http://localhost:3000',
  changeOrigin: true,
  router: {
    // '/rooms': 'http://localhost:3004',
    '/description': 'http://localhost:3003',
  },
};

const apiProxy = proxy(options);

//app.use('/rooms', apiProxy);
app.use('/description', apiProxy);

app.use(express.static(publicDir));
//app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});