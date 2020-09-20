import {
    GameState,
    startGame,
    endGame
} from './GameState';
import { Controls } from './Controls';
import { atmosphereRadius } from '../Mars';
import {
    MAX_X_OFFSET,
    MAX_Y_OFFSET,
    GRAVITY,
    BOOST,
    SHUTING,
    FRICTION,
    MAX_H_SPEED,
    MAX_V_SPEED,
    SHIP_HEIGHT,
    CONSUMPTION
} from './constants';

import { getY } from '../Mars';

const Game = {
    getVSpeed(dt) {
        const {up} = Controls;
        const {
            ship: {
                vSpeed,
                grounded,
                fuel
            }
        } = GameState;

        if (up && fuel !== 0) {
            return Math.max(vSpeed + BOOST * dt, -MAX_V_SPEED);
        } else if (grounded) {
            return 0;
        } else {
            return Math.min(vSpeed + GRAVITY * dt, MAX_V_SPEED);
        }
    },
    getHSpeed(dt) {
        const {left, right} = Controls;
        const {
            ship: {
                hSpeed,
                grounded,
                fuel
            }
        } = GameState;

        if (grounded || fuel === 0) return 0;
        if (left) return Math.max(hSpeed - SHUTING * dt, -MAX_H_SPEED);
        if (right) return Math.min(hSpeed + SHUTING * dt, MAX_H_SPEED);
        if (hSpeed !== 0) return hSpeed - Math.sign(hSpeed) * FRICTION * dt;
        return 0;
    },
    getBoost() {
        if (GameState.ship.fuel === 0) return 0;

        const {
            up,
            left,
            right
        } = Controls;

        return (up ? 70 : 0) + (left || right ? 30 : 0);
    },
    getFuelLoss(dt, boost) {
        return dt * (boost / 100) * CONSUMPTION;
    },
    update(dt) {
        const prevShip = GameState.ship;
        const ship = {...prevShip};

        if (prevShip.grounded) {
            endGame();
            return;
        }

        ship.vSpeed = this.getVSpeed(dt);
        ship.hSpeed = this.getHSpeed(dt);
        ship.boost = this.getBoost();

        ship.fuel = Math.max(ship.fuel - this.getFuelLoss(dt, ship.boost), 0);

        ship.x += ship.hSpeed;
        ship.y += ship.vSpeed;

        if (Math.abs(atmosphereRadius - ship.x) > MAX_X_OFFSET) console.log('away x');
        if (ship.y < MAX_Y_OFFSET) console.log('away y');

        const bottomLimit = getY(-ship.x) - SHIP_HEIGHT;
        ship.grounded = ship.y >= bottomLimit;

        if (ship.grounded) ship.y = bottomLimit;

        ship.alt = bottomLimit - ship.y;

        GameState.ship = ship;
    }
};

export { 
    Game,
    startGame,
    GameState
};