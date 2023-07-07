(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    }

    const {power, vision} = avengers;

    console.log(power.toFixed(2), vision.toUpperCase())

    const printAvenger = (avengers:Avengers) => {
        console.log(avengers.vision)
    }

    printAvenger(avengers)

    const avengersArr:string[] = ['Cap America', 'Ironman', 'Hulk']

    const [, ironman, ] = avengersArr
    console.log({ironman})

})()