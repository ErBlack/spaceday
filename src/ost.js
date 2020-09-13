function loadSound(src) {
    const audio = new Audio();
    Object.assign(audio, {
        preload: true,
        src: src
    });

    return audio;
}

export const final = loadSound('/spaceday/1.mp3');