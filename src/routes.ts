import { Router } from 'express';
import multer from 'multer';
import fileanalyse_view from './fileanalyse_service';

const router = Router();
const upload = multer({ storage: multer.diskStorage({}) });

router.post('/api/fileanalyse', upload.single('upfile'), fileanalyse_view);


export default router;
