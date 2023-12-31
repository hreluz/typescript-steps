(() => {
    let flash: {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'time traveller']
    }

    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super force'],
        getName() {
            return this.name;
        }
    }

    console.log(flash);

})()