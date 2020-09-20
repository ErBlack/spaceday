<script>
import { GameState } from './';
import {
    EXPLOSION_WIDTH,
    EXPLOSION_HEIGHT,
    SHIP_HEIGHT,
    SHIP_WIDTH
} from './constants';

const offsetX = EXPLOSION_WIDTH / 2 - SHIP_WIDTH / 2;
const offsetY = EXPLOSION_HEIGHT / 2 - 10;

let {
    landStatus,
    ship: {x, y}
} = GameState;

GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);
GameState.addEventListener('change:ship', ({value}) => {
    x = value.x;
    y = value.y;
});

const getX = (x) => x - offsetX;
const getY = (y) => y - offsetY;

</script>
{#if landStatus && !landStatus.success}
    <image xlink:href="/spaceday/explosion.gif" width="{EXPLOSION_WIDTH}" height="{EXPLOSION_HEIGHT}" x="{getX(x)}" y="{getY(y)}"/>
{/if}