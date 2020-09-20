import {
    GameState,
    startGame,
    finishGame
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
    CONSUMPTION,
    LANDING_LEFT,
    LANDING_RIGHT,
    LANDING_SPEED
} from './constants';

import { getY } from '../Mars';

const Game = {
    getVSpeed(dt) {
        const {up} = Controls;
        const {
            ship: {
                vSpeed,
                landed,
                fuel
            }
        } = GameState;

        if (up && fuel !== 0) {
            return Math.max(vSpeed + BOOST * dt, -MAX_V_SPEED);
        } else if (landed) {
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
                landed,
                fuel
            }
        } = GameState;

        if (landed || fuel === 0) return 0;
        if (left) return Math.max(hSpeed - SHUTING * dt, -MAX_H_SPEED);
        if (right) return Math.min(hSpeed + SHUTING * dt, MAX_H_SPEED);
        if (Math.abs(hSpeed) > 0.001) return hSpeed - Math.sign(hSpeed) * FRICTION * dt;
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
    getLandStatus() {
        const {
            x,
            hSpeed,
            vSpeed
        } = GameState.ship;

        const status = {
            success: true,
            wrongPlace: false,
            wrongSpeed: false,
            wrongHorizontalSpeed: false,
            landSpeed: vSpeed
        };

        if (x < LANDING_LEFT || x > LANDING_RIGHT) {
            status.success = false;
            status.wrongPlace = true;
        }

        if (vSpeed > LANDING_SPEED) {
            status.success = false;
            status.wrongSpeed = true;
        }

        if (hSpeed) {
            status.success = false;
            status.wrongHorizontalSpeed = true;
        }

        return status;
    },
    update(dt) {
        const prevShip = GameState.ship;
        const ship = {...prevShip};

        if (ship.landed) return;

        ship.vSpeed = this.getVSpeed(dt);
        ship.hSpeed = this.getHSpeed(dt);
        ship.boost = this.getBoost();

        ship.fuel = Math.max(ship.fuel - this.getFuelLoss(dt, ship.boost), 0);

        ship.x += ship.hSpeed;
        ship.y += ship.vSpeed;

        if (Math.abs(atmosphereRadius - ship.x) > MAX_X_OFFSET) console.log('away x');
        if (ship.y < MAX_Y_OFFSET) console.log('away y');

        const bottomLimit = getY(-ship.x) - SHIP_HEIGHT;
        
        ship.landed = ship.y >= bottomLimit;

        if (ship.landed) {
            ship.y = bottomLimit;
            GameState.landStatus = this.getLandStatus();
        }

        ship.alt = bottomLimit - ship.y;

        GameState.ship = ship;
    }
};

export { 
    Game,
    GameState,
    startGame,
    finishGame
};