const { DropdownService } = require('../services');

async function dropDown(req, res) {
  try {
    const response = await DropdownService.dropDown();
    res.status(200).json({
      success: true,
      message: 'dropdown getting successfully!',
      data: response,
      error: {},
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      data: {},
      error: error,
    });
  }
}
async function dropDowns(req, res) {
  try {
    const response = await DropdownService.dropDown();
    res.status(200).json({
      success: true,
      message: 'dropdown getting successfully!',
      data: response,
      error: {},

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong!',
      data: {},
      error: error,
    });
  }
}

module.exports = { dropDown };
