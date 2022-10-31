import { Request, Response } from 'express';

import {Cinema} from '../models/Cinema'


export const home = async (req: Request, res: Response)=>{

    let cinemas = await Cinema.findAll()

    res.render('pages/home',{
        cinemas
    })
  
};