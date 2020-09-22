function loadSound(src) {
    const audio = new Audio();
    Object.assign(audio, {
        preload: true,
        src: src
    });

    return audio;
}

export const final = loadSound('/spaceday/1.mp3');
export const main = loadSound('/spaceday/main.mp3');
export const friction = loadSound('/spaceday/friction.mp3');
export const explosion = loadSound('/spaceday/explosion.mp3');
