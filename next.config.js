module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        : undefined,
      FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      SECRET_TOKEN: process.env.SECRET_TOKEN,
    },
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      API_BASE_URL: process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://your-production-url.com",
    },
  };
  