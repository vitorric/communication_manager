import mongoose from 'mongoose';

const config = {
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PWD: process.env.MONGO_PWD,
};

const urlConfigs = {
  test: `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`,
  local: `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`,
  homolog: `mongodb://${config.MONGO_USER}:${config.MONGO_PWD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=${config.MONGO_AUTH_SOURCE}&authMechanism=SCRAM-SHA-1`,
  production: `mongodb://${config.MONGO_USER}:${config.MONGO_PWD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=${config.MONGO_AUTH_SOURCE}&authMechanism=SCRAM-SHA-1`,
};

const options: mongoose.ConnectOptions = {
  socketTimeoutMS: 50000,
};

const mongoDB = mongoose.createConnection(
  urlConfigs[process.env.NODE_ENV],
  options,
);

mongoDB.on('disconnected', () => {
  console.log('connection disconnected');
});

mongoDB.on('error', (err) => {
  console.log('Error in mongodb connection: ', err);
});

export { mongoDB };
