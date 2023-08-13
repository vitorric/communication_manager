import path from 'path';

import dotenv from 'dotenv';

const env = `.env.${process.env.NODE_ENV}`;
const pathEnv =
  process.env.NODE_ENV === 'local'
    ? path.resolve(env)
    : path.resolve(__dirname, '../../', env);

dotenv.config({
  path: pathEnv,
});
