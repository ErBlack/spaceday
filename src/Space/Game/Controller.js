import {GameState} from './GameState';
import { main, friction } from '../../ost';
import { Controls } from './Controls';
import { atmosphereRadius, getY } from '../Mars/Mars';
import {
    MAX_X_OFFSET,
    MAX_Y_OFFSET,
    GRAVITY,
    BOOST,
    SHUTING,
    FRICTION,
    MAX_H_SPEED,
    MAX_V_SPEED,
    CONSUMPTION,
    LANDING_LEFT,
    LANDING_RIGHT,
    LANDING_SPEED
} from './constants';

let mainPlaying = false;
let shuttingPlaying = false;

export const Controller = {
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

        if (landed) return 0;
        if (left && fuel !== 0) return Math.max(hSpeed - SHUTING * dt, -MAX_H_SPEED);
        if (right && fuel !== 0) return Math.min(hSpeed + SHUTING * dt, MAX_H_SPEED);
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
            y,
            hSpeed,
            vSpeed
        } = GameState.ship;

        const status = {
            success: true,
            wrongPlace: false,
            wrongSpeed: false,
            wrongHorizontalSpeed: false,
            landSpeed: vSpeed,
            x,
            y
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

        status.success=true;

        return status;
    },
    update(dt) {
        if (GameState.landStatus) return;

        const prevShip = GameState.ship;
        const ship = {...prevShip};

        ship.vSpeed = this.getVSpeed(dt);
        ship.hSpeed = this.getHSpeed(dt);
        ship.boost = this.getBoost();

        ship.fuel = Math.max(ship.fuel - this.getFuelLoss(dt, ship.boost), 0);

        ship.x += ship.hSpeed;
        ship.y += ship.vSpeed;

        if (Math.abs(atmosphereRadius - ship.x) > MAX_X_OFFSET) ship.x = prevShip.x;
        if (ship.y < MAX_Y_OFFSET) ship.y = prevShip.y;

        const bottomLimit = getY(ship.x);

        if (ship.y >= bottomLimit) {
            ship.y = bottomLimit;
            GameState.landStatus = this.getLandStatus();
        }

        GameState.landStatus || !ship.fuel ? this.finishSound() : this.updateSound();

        ship.alt = bottomLimit - ship.y;

        GameState.ship = ship;
    },
    finishSound() {
        main.pause();
        main.currentTime = 0;
        friction.pause();
        friction.currentTime = 0;
    },
    updateSound() {
        const {
            up,
            left,
            right
        } = Controls;

        this.playMain(up);
        this.playShutting(left || right)
    },
    playMain(mode) {
        if (mainPlaying !== mode) {
            mode ? main.play() : main.pause();
            mainPlaying = mode;
        }
    },
    playShutting(mode) {
        if (shuttingPlaying !== mode) {
            mode ? friction.play() : friction.pause();
            shuttingPlaying = mode;
        }
    }
};