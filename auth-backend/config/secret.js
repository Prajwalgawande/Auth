const crypto = require('crypto');

// Generate a random secret key
const generateRandomKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Export the secret key
module.exports = generateRandomKey();