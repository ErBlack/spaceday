<script>
import { GameState } from './';
import { SHIP_WIDTH, SHIP_HEIGHT } from './constants';

const offsetX = SHIP_WIDTH / 2;

let {
    landStatus,
    ship: {x, y}
} = GameState;

GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);
GameState.addEventListener('change:ship', ({value}) => {
    x = value.x;
    y = value.y;
});

</script>
{#if !landStatus || landStatus.success}
    <image xlink:href="/spaceday/rocket.png" width="{SHIP_HEIGHT}" height="{SHIP_HEIGHT}" x="{x - offsetX}" y="{y}"/>
{/if}