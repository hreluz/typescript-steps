
import { genericFunctionArrow } from "../generics/generic"
import { Villain, Hero } from "../interfaces"


const deadPool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadPool).dangerLevel)