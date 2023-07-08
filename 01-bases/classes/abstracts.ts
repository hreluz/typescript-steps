(() => {

    abstract class Mutant {
        constructor(
            public name:string,
            public realName:string) {}
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

    console.log('---- Abstract Class ---')
    const wolverine:Xmen = new Xmen('Wolverine', 'Logan');
    const magneto:Villain = new Villain('Magneto', 'Max Eisenhart');

    console.log(wolverine.saveWorld());
    console.log(magneto.conquerWorld());

    const printName = (character:Mutant) => {
        console.log(character.realName);
    }

    printName(wolverine);
    printName(magneto)
    
})();