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

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string) {
            if (name.length < 3) {
                throw new Error('Name must be longer than 3 characterrs')
            }
            this.name = name;            
        }
        
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine)
    // console.log(wolverine.getFullNameFromXmen())
    // console.log(wolverine.fullName)
    // wolverine.fullName = 'Super Wolverine'
    // console.log(wolverine.fullName)

})();