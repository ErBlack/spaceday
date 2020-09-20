import State from '../../State';
import { atmosphereRadius } from '../Mars';

const SHIP_WIDTH = 34;

const initialState = {
    started: false,
    completed: false,
    failed: false,
    ship: {
        y: 700,
        x: atmosphereRadius,
        width: SHIP_WIDTH,
        height: 71,
        vSpeed: 0,
        hSpeed: 0,
        grounded: false
    }
}

export const GameState = new State(initialState);