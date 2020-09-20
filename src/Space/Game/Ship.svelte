<script>
import { mars } from '../dimensions';
import { Game, GameState } from './';
import { SHIP_WIDTH, SHIP_HEIGHT } from './constants';

let {
    active,
    ship: {
        x: shipX,
        y: shipY
    }
} = GameState;

let time;
let startTimeout;

const loop = () => {
    if (!active) return;
    if (GameState.ship.landed) return;

    const dt = Date.now() - time;

    Game.update(dt);
    
    time += dt;

    const {
        x,
        y
    } = GameState.ship;

    shipX = x;
    shipY = y;

    requestAnimationFrame(loop);
}

const start = () => {
    time = Date.now();
    loop();
}

GameState.addEventListener('change:landStatus', ({value}) => value || start());

GameState.addEventListener('change:active', ({value}) => {
    active = value;

    clearTimeout(startTimeout);

    if (active) {
        startTimeout = setTimeout(start, 1000);
    }
});
</script>
{#if active}
<image xlink:href="/spaceday/rocket.png" width="{SHIP_HEIGHT}" height="{SHIP_HEIGHT}" x="{shipX}" y="{shipY}"/>
{/if}