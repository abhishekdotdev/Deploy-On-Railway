const express = require('express');
const { PORT } = require('./config/serverConfig');
const { rateLimiterUsingThirdParty } = require('./middlewares/rateLimiter');
const { connectDB } = require('./config/dbConfig');

const app = express();

app.use(rateLimiterUsingThirdParty);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hey! It's Working Yrr!!",
  });
});

app.get('/ping', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Pong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
