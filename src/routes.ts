import { Router } from 'express';
import fileanalyse_view from './fileanalyse_service';

const router = Router();


router.post('/api/fileanalyse', fileanalyse_view);


export default router;
