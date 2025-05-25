import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

interface PredictionRequest {
  temperature: number;
  humidity: number;
  rainfall: number;
}

interface PredictionResponse {
  recommended_crop: string;
}

router.post('/recommend-crop', async (req: Request, res: Response) => {
  try {
    const { temperature, humidity, rainfall }: PredictionRequest = req.body;

    const response = await axios.post<PredictionResponse>('http://localhost:8000/predict', {
      temperature,
      humidity,
      rainfall,
    });

    res.json(response.data);
  } catch (error: any) {
    console.error('Prediction error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Prediction failed', detail: error.response?.data || error.message });
  }
});

export default router;
