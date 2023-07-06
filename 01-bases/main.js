"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Force;
    (function (Force) {
        Force[Force["flash"] = 5] = "flash";
        Force[Force["superman"] = 100] = "superman";
        Force[Force["batman"] = 1] = "batman";
        Force[Force["acuaman"] = 0] = "acuaman";
    })(Force || (Force = {}));
    const fuerzaFlash = Force.flash;
    const fuerzaSuperman = Force.superman;
    const fuerzaBatman = Force.batman;
    const fuerzaAcuaman = Force.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisignal activated';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'a.k.a Kal-EL');
    console.log({ superman });
})();
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
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'time traveller']
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super force'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
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
(() => {
    let myCustomVariable = 'Hector';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['none']
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman }, { isBatman });
})();
(() => {
    let avengers = 15;
    console.log(avengers);
    const villans = 20;
    if (avengers > villans) {
        console.log('We have a problem');
    }
    else {
        console.log('We are saved');
    }
    avengers = Number('55 A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLantern = 'Green Lantern';
    const staticShock = `Statick shock`;
    const abc = 123;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'It is not present');
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.4334;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    const villains = ['Venom', 'Carnage', 'Green Globin'];
    villains.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = false;
    console.log(hero);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 3] = "min";
        AudioLevel[AudioLevel["medium"] = 4] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Help');
})();
(() => {
    let nothing = undefined;
    console.log(nothing);
    let isActive = true;
    console.log(isActive);
})();
//# sourceMappingURL=main.js.map