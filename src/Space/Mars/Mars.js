import { mars } from '../dimensions';
import { SHIP_HEIGHT } from '../Game/constants';
export const radius = 3000;
export const atmosphere = 1500;
export const atmosphereRadius = radius + atmosphere;
export const size = atmosphereRadius * 2;
export const offset = (atmosphereRadius / radius * mars.size) - mars.size;

export const width = mars.size + offset;
export const height = width;
export const x = mars.x - offset / 2;
export const y = mars.y - offset / 2;

const scale = height / size;

const r2 = Math.pow(radius, 2);
const cache = {};

export const getY = (x) => {
    x = -Math.round(x);

    if (!cache[x]) {
        cache[x] = -(Math.sqrt(r2 - Math.pow(x + atmosphereRadius, 2)) - atmosphereRadius) - SHIP_HEIGHT;
    }

    return cache[x];
}

for (let i = 3725; i <= 5246; i++) {
    getY(i);
};

export const marsXToSpace = (localX) => x + localX * scale;
export const marsYToSpace = (localY) => y + localY * scale;