<script>
import { GameState } from './GameState';
import preload from '../../preloadImage';
import { explosion as sound } from '../../ost';
import {
    EXPLOSION_WIDTH,
    EXPLOSION_HEIGHT,
    SHIP_HEIGHT,
    SHIP_WIDTH
} from './constants';

preload('/spaceday/explosion.gif?i=0');
preload('/spaceday/explosion.gif?i=1')

const offsetX = EXPLOSION_WIDTH / 2;
const offsetY = EXPLOSION_HEIGHT / 2 - 10;

let i = 0;

let {
    landStatus,
    ship: {x, y}
} = GameState;

let explosion = false;
let explosionTimeout;

const explode = () => {
    clearTimeout(explosionTimeout);
    explosionTimeout = setTimeout(() => {
        explosion = false;
    }, 1000);
    explosion = true; 
    sound.currentTime = 0;
    sound.play();
}

GameState.addEventListener('change:landStatus', ({value}) => {
    if (value && !value.success) {
        i = i ? 0 : 1;

        explode();
    }
});
GameState.addEventListener('change:ship', ({value}) => {
    x = value.x;
    y = value.y;
});

const getX = (x) => x - offsetX;
const getY = (y) => y - offsetY;

</script>
{#if explosion}
    <image xlink:href="/spaceday/explosion.gif?i={i}" width="{EXPLOSION_WIDTH}" height="{EXPLOSION_HEIGHT}" x="{getX(x)}" y="{getY(y)}"/>
{/if}