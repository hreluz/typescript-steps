"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    // let myFunction: (y: number, z:number) => number;
    // let myFunction: (y: string) => string;
    // let myFunction: () => string;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('Hector'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
//# sourceMappingURL=06-functions.js.map