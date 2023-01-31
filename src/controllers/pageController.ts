import { Request, Response } from "express";
import { creatMenuObject } from '../hellpers/CreatMenuObject';
import { getPet } from '../model/pets';

export const home = (req: Request, res: Response)=>{

    let list = getPet.getAll();

    res.render('pages/page',{
        menu: creatMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },

        list
    });
    
};

export const dogs = (req: Request, res: Response)=>{

    let list = getPet.getFromType('dog');

    res.render('pages/page',{
        menu: creatMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },

        list
    });
};

export const cats = (req: Request, res: Response)=>{

    let list = getPet.getFromType('cat');

    res.render('pages/page',{
        menu: creatMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
         list
    });
};

export const fishes = (req: Request, res: Response)=>{

    let list = getPet.getFromType('fish');

    res.render('pages/page',{
        menu: creatMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        
        list
    });
};