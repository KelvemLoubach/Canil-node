import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.send('Oi, Home aqui!')
};

export const dogs = (req: Request, res: Response)=>{
    res.send('Oi, dogs aqui!')
};

export const cats = (req: Request, res: Response)=>{
    res.send('Oi, cats aqui!')
};

export const fishes = (req: Request, res: Response)=>{
    res.send('Oi, fishes aqui!')
};