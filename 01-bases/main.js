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
    console.log(superman.name);
})();
(() => {
    const client = {
        name: 'Hector',
        address: {
            id: 4,
            zip: '84453',
            city: 'Seattle'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    console.log(client.getFullAddress(''));
})();
//# sourceMappingURL=main.js.map