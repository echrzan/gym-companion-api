import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ok' });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(+port, '0.0.0.0', () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
