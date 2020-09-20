import { GameState } from './GameState';
import { Controls } from './Controls';
import { atmosphereRadius } from '../Mars';

const MAX_Y_OFFSET = 650;
const MAX_X_OFFSET = 750;

const GRAVITY = 0.007;
const BOOST = -0.009;
const SHUTING = 0.002;
const FRICTION = 0.001;

const MAX_H_SPEED = 6;
const MAX_V_SPEED = 12;

import { getY } from '../Mars';

export const Game = {
    state: GameState,
    getVSpeed(dt) {
        const {up} = Controls;
        const {
            ship: {
                vSpeed,
                grounded
            }
        } = this.state;

        if (up) {
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
                grounded
            }
        } = this.state;

        if (grounded) return 0;
        if (left) return Math.max(hSpeed - SHUTING * dt, -MAX_H_SPEED);
        if (right) return Math.min(hSpeed + SHUTING * dt, MAX_H_SPEED);
        if (hSpeed !== 0) return hSpeed - Math.sign(hSpeed) * FRICTION * dt;
        return 0;
    },
    update(dt) {
        const {
            ship: {
                x,
                y,
                height
            }
        } = this.state;

        let newVSpeed = this.getVSpeed(dt);
        let newHSpeed = this.getHSpeed(dt);

        let newX = x + newHSpeed;
        let newY = y + newVSpeed;


        if (Math.abs(atmosphereRadius - newX) > MAX_X_OFFSET) console.log('away x');
        if (newY < MAX_Y_OFFSET) console.log('away y');

        const bottomLimit = getY(-newX) - height;
        const newGrounded = newY >= bottomLimit;

        if (newGrounded) {
            newVSpeed = 0;
            newHSpeed = 0;
            newY = bottomLimit;
        }

        this.state.ship.vSpeed = newVSpeed;
        this.state.ship.hSpeed = newHSpeed;
        this.state.ship.x = newX;
        this.state.ship.y = newY;
        this.state.ship.grounded = newGrounded;

        return this.state.ship;
    }
};