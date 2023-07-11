function printToConsole(constructor:Function) {
    console.log(constructor);
}

// It executes only in the transpilation
@printToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name:string
    ){}
}