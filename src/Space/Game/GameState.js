import State from '../../State';
import { atmosphereRadius } from '../Mars/Mars';


const initialShipState = () => ({
    y: 700,
    x: atmosphereRadius,
    vSpeed: 0,
    hSpeed: 0,
    alt: 0,
    boost: 0,
    fuel: 100
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