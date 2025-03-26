const mongoose = require('mongoose');
const { connectDB } = require('../config/dbConfig');
const dropDownItem = require('../schema/userDropdown');

const seedData = async () => {
  try {
    await connectDB();
    await dropDownItem.insertMany([
      { name: 'Oppo', value: '1' },
      { name: 'Redmi ', value: '2' },
      { name: 'Vivo', value: '3' },
    ]);
    console.log('Dropdown items inserted sucessfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
