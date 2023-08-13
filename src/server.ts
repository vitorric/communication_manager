import './core/config';

import { Server, createServer } from 'http';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { mongoDB } from '@infra/db/mongodb/connection';

const server = async (): Promise<any> => {
  return new Promise((resolve) => {
    mongoDB.once('connected', () => {
      const app = express();

      const _server: Server = createServer(app);

      app.use(
        cors(),
        helmet(),
        morgan('dev'),
        express.json({ limit: '1000MB' }),
        express.urlencoded({ limit: '2000MB', extended: true }),
      );

      console.log(`\x1b[32mMongodb connection ${process.env.NODE_ENV}\x1b[0m`);
      return resolve(_server);
    });
  });
};

export { server };
