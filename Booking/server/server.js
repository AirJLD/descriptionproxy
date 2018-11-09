const app = require('./api');

const port = 3004;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
