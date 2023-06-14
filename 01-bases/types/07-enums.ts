(() => {

    enum AudioLevel {
        min = 3,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()