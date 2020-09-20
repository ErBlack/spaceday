<script>
import { mars } from '../dimensions';
import { Game } from './index';

let {
    x: shipX,
    y: shipY,
    width,
    height
} = Game.state.ship;

let time;
let started = Game.state.started;
let startTimeout;

Game.state.addEventListener('change:started', (value) => {
    started = value;

    clearTimeout(startTimeout);

    if (started) {
        startTimeout = setTimeout(() => {
            time = Date.now();
            loop();
        }, 1000);
    }
});

const loop = () => {
    if (!started) return;

    const dt = Date.now() - time;

    const {
        x,
        y
    } =Game.update(dt);

    time += dt;

    shipX = x;
    shipY = y;

    requestAnimationFrame(loop);
}
</script>
{#if started}
<image xlink:href="/spaceday/rocket.png" width="{width}" height="{height}" x="{shipX}" y="{shipY}"/>
{/if}