(() => {

    class Avenger {
        constructor(
            public name:string,
            public realName:string
        ) {
            console.log('Avenger constructor called');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }


    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean) {
                super(name, realName);
            }

        getFullNameFromXmen() {
            return super.getFullName();
        }
        
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine)
    console.log(wolverine.getFullNameFromXmen())
})();