const express = require('express');
const { PORT } = require('./config/serverConfig');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Pong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
