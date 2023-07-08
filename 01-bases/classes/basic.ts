(() => {
    
    class Avenger {
        // private name:string;
        // public team: string
        // realName?:string; // is public by default
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor(private name:string, public team:string, public realName?:string) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        bio() {
            return `${this.name} (${this.team})`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Cap America', 'Scott Lang');
    // console.log(antman.realName);
    // console.log(Avenger.avgAge);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());


})();