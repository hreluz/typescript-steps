"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'time traveller']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super force'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    console.log(superman);
})();
