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
    console.log(Avenger.getav());
})();
//# sourceMappingURL=main.js.map