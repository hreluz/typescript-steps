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
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
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
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log(this.nombre + ' ' + this.estadoCivil);
    }
}
//# sourceMappingURL=main.js.map