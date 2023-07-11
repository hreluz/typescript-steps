// import { Hero as MyHero, Hero2, Hero3 } from "./classes/hero";
// import * as HeroClasses from "./classes/hero";
// import powers2 from "./data/powers";

import { Pokemon } from "./decorators/pokemon-class";
import { getPokemon } from "./generics/get-pokemon";

// import { printObject, genericFunction, genericFunctionArrow } from "./generics/generic";


// const Hero = 123;

// console.log('Hola Mundo!!');


// // const ironman = new MyHero('Batman', '1', 25);
// const ironman = new HeroClasses.Hero('Batman', 1, 25);
// console.log(ironman)
// console.log(powers2)
// console.log(ironman.power)


// printObject(123);
// printObject(new Date());
// printObject({a:1 ,b:2, c:3});
// printObject([1,2,3,4,5,6,7,8])
// printObject('Hola Mundo')

// console.log('Generic function')
// console.log(genericFunction(3.141516).toFixed(2))
// console.log(genericFunction('Hello World').toUpperCase())
// console.log(genericFunctionArrow(new Date()).getDate())


// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log('End of getPokemon'))

const charmader = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu'
console.log(charmader)