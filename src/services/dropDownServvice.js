const dropDownItem = require('../schema/userDropdown');

async function dropDown() {
  try {
    const response = await dropDownItem.find();
    const countDoc = await dropDownItem.aggregate([{ $count: 'myCount' }]);
    return { response, countDoc };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { dropDown };
