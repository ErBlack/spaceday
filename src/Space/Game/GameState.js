import State from '../../State';
import { atmosphereRadius } from '../Mars';

const SHIP_WIDTH = 34;
const SHIP_HEIGHT = 71;

const initialShipState = () => ({
    y: 700,
    x: atmosphereRadius,
    width: SHIP_WIDTH,
    height: SHIP_HEIGHT,
    vSpeed: 0,
    hSpeed: 0,
    grounded: false,
    alt: 0,
    boost: 0,
    fuel: 100
});
const initialState = () => ({
    active: false,
    completed: false,
    failed: false,
    ship: initialShipState()
})

export const GameState = new State(initialState());
export const startGame = () => GameState.active = true;
export const endGame = () => Object.assign(GameState, initialState());