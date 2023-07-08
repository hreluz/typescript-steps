(() => {
    
    class Avenger {
        private name:string;
        public team: string
        realName?:string; // is public by default
        static avgAge: number = 35;

        constructor(name:string, team:string, realName?:string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Cap America');
    console.log(antman.realName);
    console.log(Avenger.avgAge);


})();