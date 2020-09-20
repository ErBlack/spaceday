<script>
import { mars } from '../dimensions';
import { Game, GameState } from './';
import Ship from './Ship.svelte';
import Explosion from './Explosion.svelte';
import { SHIP_WIDTH, SHIP_HEIGHT, EXPLOSION_WIDTH } from './constants';

let {active} = GameState;

let time;
let startTimeout;
let animationFrame;

const loop = () => {
    if (!active) return;

    const dt = Date.now() - time;

    Game.update(dt);

    time += dt;

    animationFrame = requestAnimationFrame(loop);
}

const start = () => {
    cancelAnimationFrame(animationFrame);

    time = Date.now();
    loop();
}


GameState.addEventListener('change:active', ({value}) => {
    active = value;

    clearTimeout(startTimeout);

    if (active) {
        startTimeout = setTimeout(start, 1000);
    }
});
</script>
{#if active}
    <Ship/>
    <Explosion/>
{/if}