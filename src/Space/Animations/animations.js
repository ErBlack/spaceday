import { mars } from '../dimensions.js';

export const MARS_SCALE_FACTOR = 3500;

export const FROM_MARS = {
    x: mars.x + mars.size / 2,
    y: mars.y * 0.99997,
    values: [MARS_SCALE_FACTOR, 1],
    get translate() {
        return [this.zoom, '0,0'];
    },
    get zoom() {
        return `${-(MARS_SCALE_FACTOR - 1) * this.x},${-(MARS_SCALE_FACTOR - 1) * this.y}`;
    }
}