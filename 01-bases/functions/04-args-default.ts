(() => {
    const fullName = (firstName:string, lastName?:(string|boolean), upper: boolean = false):string => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    }

    const name = fullName('Tony', 'Stark', true);
    console.log({name})
})()