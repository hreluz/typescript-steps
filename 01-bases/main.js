"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return 'World saved';
        }
    }
    class Villain extends Mutant {
        conquerWorld() {
            return 'World conquered';
        }
    }
    console.log('---- Abstract Class ---');
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Max Eisenhart');
    console.log(wolverine.saveWorld());
    console.log(magneto.conquerWorld());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Cap America', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Avenger constructor called');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameFromXmen() {
            return super.getFullName();
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Name must be longer than 3 characterrs');
            }
            this.name = name;
        }
    }
})();
//# sourceMappingURL=main.js.map