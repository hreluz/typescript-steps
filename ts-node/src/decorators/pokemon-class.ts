function printToConsole(constructor:Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print:boolean = false):Function => {
    if (print) {
        return printToConsole
    }
    return () => console.log('Hello world')
}

const blockPrototype = function(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({
        //     target, propertyKey, descriptor
        // })

        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.log('Id should be betweeen 1 and 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}

function readonly(isWritable: boolean = true):Function {
    return function(target:any, propertyKey: string) {
        // console.log(target, propertyKey)

        const descriptor: PropertyDescriptor  = {
            get() {
                console.log(this)
                return 'Hector'
            },
            set(this, val) {
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    // writable: false,
                    writable: isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}


@blockPrototype
// It executes only in the transpilation
@printToConsoleConditional(false)
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name:string
    ){}


    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon was saved in DB ${id}`)
    }
}