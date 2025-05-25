import { Router } from 'express';
import { recommendCrop } from '../controllers/recommendController';

const router: Router = Router();

router.post('/', recommendCrop);

export default router;
