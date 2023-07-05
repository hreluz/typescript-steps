"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('Hector'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
//# sourceMappingURL=06-functions.js.map