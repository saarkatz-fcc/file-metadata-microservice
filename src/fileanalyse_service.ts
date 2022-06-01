import fs from 'node:fs';
import { Request, Response } from 'express';


function fileanalyse_view(req:Request, res:Response) {
    if (req.file) {
        fs.unlink(req.file.path, () => {}); // Delete the file right away
        res.json({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size });
    }
    else {
        res.status(400).json({ error: 'no file received' })
    }
}


export default fileanalyse_view;
