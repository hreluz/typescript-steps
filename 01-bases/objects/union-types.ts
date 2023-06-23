(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable:string | number| Hero = 'Hector';

    console.log(myCustomVariable)

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['none']
    }

    console.log(typeof myCustomVariable)

})();