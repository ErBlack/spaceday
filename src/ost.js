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


let i = 0;
const initSound = () => {
    switch (i) {
        case 1:
            [final, main, friction, explosion].forEach(audio => {
                audio.volume = 0;
                audio.play();
            });
            break;
        case 5:
            [final, main, friction, explosion].forEach(audio => {
                audio.volume = 1;
                audio.pause();
                audio.currentTime = 0;
            });
            document.removeEventListener('touchstart', initSound);
            break;
    }

    i++;
}

document.addEventListener('touchstart', initSound)