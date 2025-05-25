import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import recommendRoute from './routes/recommend';
import predictRoutes from './routes/predict';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/recommend', recommendRoute);
app.use('/api', predictRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
