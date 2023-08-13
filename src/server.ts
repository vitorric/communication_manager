import './core/config';

import { createServer } from 'http';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const server = createServer(app);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
  helmet(),
  morgan('dev'),
  express.json({ limit: '1000MB' }),
  express.urlencoded({ limit: '2000MB', extended: true }),
);

export { server };
