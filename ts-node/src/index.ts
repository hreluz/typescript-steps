// import { Hero as MyHero, Hero2, Hero3 } from "./classes/hero";
import * as HeroClasses from "./classes/hero";
import powers2 from "./data/powers";


const Hero = 123;

console.log('Hola Mundo!!');


// const ironman = new MyHero('Batman', '1', 25);
const ironman = new HeroClasses.Hero('Batman', '1', 25);
console.log(ironman)
console.log(powers2)

