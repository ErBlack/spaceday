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
    alt: 0,
    boost: 0,
    fuel: 100,
    landed: false
});
const initialState = () => ({
    active: false,
    landStatus: null,
    ship: initialShipState()
})

export const GameState = new State(initialState());
export const startGame = () => {
    const { landStatus, ship } = initialState();

    Object.assign(GameState, {
        landStatus,
        ship,
        active: true
    });
};
export const finishGame = () => Object.assign(GameState, initialState());