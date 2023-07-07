"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    };
    const { power, vision } = avengers;
    console.log(power.toFixed(2), vision.toUpperCase());
    const printAvenger = (avengers) => {
        console.log(avengers.vision);
    };
    printAvenger(avengers);
})();
(() => {
    const NOMBRE = 'Hector';
    const getName = function () { };
})();
//# sourceMappingURL=main.js.map