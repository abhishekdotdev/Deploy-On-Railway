const mongoose = require('mongoose');
const { DB_URL } = require('./serverConfig');

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('DATABASE CONNECTED SUCCESSFULLY!');
  } catch (error) {
    console.log('Error while connecting to DB', error);
    process.exit(1);
  }
};

module.exports = { connectDB };
