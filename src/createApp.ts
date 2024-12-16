import express from 'express';

import userRouter from './routes/users.route';

export function createApp() {
  const app = express();
  const PORT = 4000;

  app.use(express.json());

  app.use('/api/v1/users', userRouter);

 return app
}