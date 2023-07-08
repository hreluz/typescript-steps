(() => {
    
    class Avenger {
        // private name:string;
        // public team: string
        // realName?:string; // is public by default
        static avgAge: number = 35;

        constructor(private name:string, public team:string, public realName?:string) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Cap America', 'Scott Lang');
    console.log(antman.realName);
    console.log(Avenger.avgAge);


})();