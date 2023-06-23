(() => {

    const fullName = (firstName: string, ...restArgs: string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'a.k.a Kal-EL');
    console.log({superman});
})()