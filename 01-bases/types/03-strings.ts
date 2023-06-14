(() => {

    const batman:string = 'Batman';
    const greenLantern:string = 'Green Lantern';
    const staticShock:string = `Statick shock`
    const abc = 123

    console.log(batman.toUpperCase());

    console.log(`I'm ${batman}, ${abc.toString()}`);

    console.log(batman[10]?.toUpperCase() || 'It is not present');

})();