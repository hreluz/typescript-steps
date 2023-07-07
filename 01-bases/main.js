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
    const avengersArr = ['Cap America', 'Ironman', 'Hulk'];
    const [, ironman,] = avengersArr;
    console.log({ ironman });
})();
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armor Suit'
    };
    const capAmerica = {
        name: 'Capitan America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Thunder'
    };
    const avengers = [ironman, thor, capAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const NOMBRE = 'Hector';
    const getName = function () { };
})();
//# sourceMappingURL=main.js.map