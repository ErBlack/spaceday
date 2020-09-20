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

GameState.addEventListener('change:active', ({value}) => {
    active = value;

    clearTimeout(startTimeout);

    if (active) {
        startTimeout = setTimeout(() => {
            time = Date.now();
            loop();
        }, 1000);
    }
});

const loop = () => {
    if (!active) return;

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
</script>
{#if active}
<image xlink:href="/spaceday/rocket.png" width="{SHIP_HEIGHT}" height="{SHIP_HEIGHT}" x="{shipX}" y="{shipY}"/>
{/if}