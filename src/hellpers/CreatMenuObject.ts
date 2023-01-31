type objectTypes = '' | 'all' | 'cat' | 'dog' | 'fish';

export const creatMenuObject = (active:objectTypes)=>{
    let objectReturn = {
        all: false,
        cat: false,
        dog: false,
        fish: false
    }

    if(active !== ''){
        objectReturn[active] = true;
    }

        return objectReturn;
}