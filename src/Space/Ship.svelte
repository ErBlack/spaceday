<script>
import { mars } from './dimensions.js';
import { Game } from './Game';

let {
    x: shipX,
    y: shipY,
    width,
    height
} = Game.state.ship;
let time;

const loop = () => {
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

time = Date.now();
loop();
</script>

<image xlink:href="/spaceday/rocket.png" width="{width}" height="{height}" x="{shipX}" y="{shipY}"/>