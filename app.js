const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('列出全部 Todo');
  res.send('<h1>列出全部 Todo</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}.`)
})