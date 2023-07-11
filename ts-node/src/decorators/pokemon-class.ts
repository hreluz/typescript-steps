function printToConsole(constructor:Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print:boolean = false):Function => {
    if (print) {
        return printToConsole
    }
    return () => console.log('Hello world')
}

// It executes only in the transpilation
@printToConsoleConditional(false)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name:string
    ){}
}