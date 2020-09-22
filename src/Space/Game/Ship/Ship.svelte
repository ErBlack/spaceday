<script>
import LeftEngine from './LeftEngine.svelte';
import RightEngine from './RightEngine.svelte';
import MainEngine from './MainEngine.svelte';

import { GameState } from '../GameState';
import {
    SHIP_WIDTH,
    SHIP_HEIGHT,
    MAIN_ENGINE_HEIGHT,
    FRICTION_ENGINE_WIDTH
} from '../constants';

const shipOffsetX = SHIP_WIDTH / 2 + FRICTION_ENGINE_WIDTH;
const getX = x => x - shipOffsetX;

let {
    landStatus,
    ship: {
        x,
        y,
        boost
    }
} = GameState;

GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);
GameState.addEventListener('change:ship', ({value}) => {
    x = value.x;
    y = value.y;
    boost = value.boost;
});

</script>
<svg xmlns="http://www.w3.org/2000/svg" height="{SHIP_HEIGHT + MAIN_ENGINE_HEIGHT}" width="{SHIP_WIDTH + FRICTION_ENGINE_WIDTH * 2}" x="{getX(x)}" y="{y}">
    {#if !landStatus && boost}
        <LeftEngine/>
        <RightEngine/>
        <MainEngine/>
    {/if}
    {#if !landStatus || landStatus.success}
        <image xlink:href="/spaceday/rocket.png" width="{SHIP_WIDTH}" height="{SHIP_HEIGHT}" x="{FRICTION_ENGINE_WIDTH}" y="{0}"/>
    {/if}
</svg>