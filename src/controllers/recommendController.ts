// import { Request, Response } from 'express';
// import axios from 'axios';

// export const getRecommendation = async (req: Request, res: Response) => {
//   try {
//     const inputData = req.body;

//     const response = await axios.post('http://localhost:5001/predict', inputData);

//     return res.json({
//       recommendation: response.data.recommendation,
//     });
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message });
//   }
// };
// import { Request, Response } from 'express';
// import axios from 'axios';

// export const getRecommendation = async (req: Request, res: Response) => {
//   try {
//     const inputData = req.body;
//     const response = await axios.post('http://localhost:8000/predict', inputData);
//     res.json({ recommendation: response.data.recommendation }); // ✅ No `return` needed
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       res.status(500).json({
//         error: error.response?.data?.message || error.message,
//       });
//     } else {
//       res.status(500).json({ error: "Server error" });
//     }
//   }
// };

import { Request, Response } from "express";
import axios from "axios";

export const recommendCrop = async (req: Request, res: Response) => {
  const inputData = req.body;

  try {
    const response = await axios.post("http://localhost:8000/predict", inputData);

    const prediction = response.data.recommended_crop;

    res.status(200).json({ recommendedCrop: prediction });
  } catch (error) {
    console.error("Error contacting ML model:", error);
    res.status(500).json({ message: "Failed to get recommendation from ML model" });
  }
};
