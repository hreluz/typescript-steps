"use strict";
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
    console.log(antman.realName);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
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
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.getFullNameFromXmen());
    console.log(wolverine.fullName);
    wolverine.fullName = 'Super Wolverine';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map