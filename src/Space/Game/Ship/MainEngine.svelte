<script>
import { Controls } from '../Controls';
import { GameState } from '../GameState';
import preload from '../../../preloadImage';
import {
    SHIP_WIDTH,
    SHIP_HEIGHT,
    MAIN_ENGINE_WIDTH,
    MAIN_ENGINE_HEIGHT,
    FRICTION_ENGINE_WIDTH,
} from '../constants';

preload('/spaceday/main.gif');

const mainX = FRICTION_ENGINE_WIDTH + (SHIP_WIDTH - MAIN_ENGINE_WIDTH) / 2;
const mainY = SHIP_HEIGHT - 8;

let {up} = Controls;

GameState.addEventListener('change:ship', () => up = Controls.up);

</script>
{#if up}
    <image xlink:href="/spaceday/main.gif" width="{MAIN_ENGINE_WIDTH}" height="{MAIN_ENGINE_HEIGHT}" x="{mainX}" y="{mainY}"/>
{/if}
