import { mars } from './dimensions';
export const radius = 3000;
export const atmosphere = 1500;
export const atmosphereRadius= radius + atmosphere;
export const size = atmosphereRadius * 2;
export const offset = (atmosphereRadius / radius * mars.size) - mars.size;

const r2 = Math.pow(radius, 2);

export const getY = (x) => {
    return -(Math.sqrt(r2 - Math.pow(x + atmosphereRadius, 2)) - atmosphereRadius);
}