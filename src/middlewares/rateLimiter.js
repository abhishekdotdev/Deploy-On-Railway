const rateLimit = require('express-rate-limit');

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 1 * 60 * 1000, //24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 10,
  //   message: 'You have exceeded the requests in per min',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'You have exceeded the requests per minute limit',
    });
  },
});

module.exports = { rateLimiterUsingThirdParty };
