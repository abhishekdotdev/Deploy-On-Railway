const dropDownItem = require('../schema/userDropdown');

async function dropDown() {
  try {
    const response = await dropDownItem.find();
    const countDoc = await dropDownItem.aggregate([{ $count: 'myCount' }]);
    const countDocument = await dropDownItem.countDocuments();
    // const data = response.slice(0, 5);
    // const countDoc = data.length;
    return { response, countDoc };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { dropDown };
