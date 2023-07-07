(() => {
    type Avenger = {
        name:string, 
        weapon: string
    }

    const ironman:Avenger = {
        name: 'Tony Stark',
        weapon: 'Armor Suit'
    }

    const capAmerica:Avenger = {
        name: 'Capitan America',
        weapon: 'Shield'
    }


    const thor:Avenger = {
        name: 'Thor',
        weapon: 'Thunder'
    }

    const avengers:Avenger[] = [ironman, thor, capAmerica]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
        
    }





})( )