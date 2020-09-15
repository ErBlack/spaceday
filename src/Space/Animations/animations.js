import { mars } from '../dimensions.js';

export const PLANETARY_DURATION = '100s';
export const PLANETARY_SPLINES = '0 .7 0 1';

export const FROM_MARS = {
    x: mars.x + mars.size / 2,
    y: mars.y * 0.99997,
    values: [3000, 1],
    get translate() {
        return this.values.map((scale) => scale === 1 ? '0,0' : `${-(scale - 1) * this.x},${-(scale - 1) * this.y}`);
    }
}