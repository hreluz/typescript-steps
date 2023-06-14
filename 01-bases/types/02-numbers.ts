(() => {

    let avengers: number = 15;

    console.log(avengers);

    const villans = 20;

    if ( avengers > villans) {
        console.log('We have a problem');
    } else {
        console.log('We are saved');
    }

    avengers = Number('55 A');

    console.log({avengers});

    // NaN is considered also a Number
})()