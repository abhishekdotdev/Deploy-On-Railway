const mongoose = require('mongoose');
const { connectDB } = require('../config/dbConfig');
const dropDownItem = require('../schema/userDropdown');

const seedData = async () => {
  try {
    await connectDB();
    await dropDownItem.insertMany([
      { name: 'Option 1', value: 'option1' },
      { name: 'Option 2', value: 'option2' },
      { name: 'Option 3', value: 'option3' },
    ]);
    console.log('Dropdown items inserted');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
