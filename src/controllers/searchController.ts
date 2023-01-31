import { Request, Response } from "express";

import { getPet } from '../model/pets';
import { creatMenuObject } from '../hellpers/CreatMenuObject';


 export const search = ( req: Request, res: Response)=>{

  let query: string = req.query.name as string;

  if(!query){
   res.redirect('/')
   return;
  };

  let list = getPet.getFromName(query);

    res.render('pages/page', {
      menu: creatMenuObject(''),
      list,
      query
    })
 } 