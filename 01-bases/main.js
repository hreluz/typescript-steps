"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Cap America');
    console.log(antman.realName);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map