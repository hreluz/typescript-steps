(() => {

    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor(public name:string) {
        }

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('I am Apocalipsis, the only one');
            }

            return Apocalipsis.instance;
        }

        changeName(newName:string):void {
            this.name = newName;
        }
    }


    // const apocalipsis = new Apocalipsis('I am Apocalipsis, the only one');
    // const apocalipsis2 = new Apocalipsis('I am Apocalipsis2, the only one');
    // const apocalipsis3 = new Apocalipsis('I am Apocalipsis3, the only one');

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis.changeName('Xavier')

    console.log(apocalipsis)
    console.log(apocalipsis2)
    console.log(apocalipsis3)
})();