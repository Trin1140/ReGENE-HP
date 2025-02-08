require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
  }
};
