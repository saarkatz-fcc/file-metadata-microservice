import { Request, Response } from 'express';


function fileanalyse_view(req:Request, res:Response) {
    res.json({ res: 'Hello Wolrd!' });
}


export default fileanalyse_view;
