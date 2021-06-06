const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb+srv://hung123:a1b2c3D@cluster0.fm2md.mongodb.net/testip?retryWrites=true&w=majority",
  // 'mongodb://' + (process.env.IP || 'localhost') + ':' +
  // (process.env.MONGO_PORT || '27017') +
  // '/<db_name>'
};

module.exports = config;
