<script>
import { GameState } from './';
import { Controls } from './Controls';
import {
    SHIP_WIDTH,
    SHIP_HEIGHT,
    MAIN_ENGINE_WIDTH,
    MAIN_ENGINE_HEIGHT,
    FRICTION_ENGINE_WIDTH,
    FRICTION_ENGINE_HEIGHT,
} from './constants';

const shipOffsetX = SHIP_WIDTH / 2;
const mainOffsetX = MAIN_ENGINE_WIDTH / 2;

const getShipX = x => x - shipOffsetX;

const getMainX = x => x - mainOffsetX;
const getMainY = y => y + SHIP_HEIGHT - 8;

const getFrictionXLeft = (x) => x - 32;
const getFrictionXRight = (x) => x + 33 - FRICTION_ENGINE_WIDTH;
const getFrictionY = y => y + 1;


let {
    landStatus,
    ship: {
        x,
        y,
        boost
    }
} = GameState;
let {
    left,
    right,
    up
} = Controls;

GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);
GameState.addEventListener('change:ship', ({value}) => {
    x = value.x;
    y = value.y;
    boost = value.boost;
    left = Controls.left;
    right = Controls.right;
    up = Controls.up;
});

</script>
{#if !landStatus || landStatus.success}
    {#if up && boost}
        <image xlink:href="/spaceday/main.gif" width="{MAIN_ENGINE_WIDTH}" height="{MAIN_ENGINE_HEIGHT}" x="{getMainX(x)}" y="{getMainY(y)}"/>
    {/if}
    {#if left && boost}
    <svg xmlns="http://www.w3.org/2000/svg" x={getFrictionXRight(x, -1)} y={getFrictionY(y)} width="{FRICTION_ENGINE_WIDTH}" height="{FRICTION_ENGINE_HEIGHT}" viewBox="0 0 120 20">
        <path d="M0 10.038c14.525 22.482 120 0 120 0s-105.475-22.518-120 0z" fill="rgba(255,255,255,.5)">
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                values="1; .8; 1;"
                dur=".3s"
                repeatCount="indefinite"
            />
        <path/>
    </svg>
    {/if}
    {#if right && boost}
    <svg xmlns="http://www.w3.org/2000/svg" x={getFrictionXLeft(x, 1)} y={getFrictionY(y)} width="{FRICTION_ENGINE_WIDTH}" height="{FRICTION_ENGINE_HEIGHT}" viewBox="0 0 120 20">
        <g transform="rotate(180 60 10)">
        <path d="M0 10.038c14.525 22.482 120 0 120 0s-105.475-22.518-120 0z" fill="rgba(255,255,255,.5)">
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                values="1; .8; 1;"
                dur=".3s"
                repeatCount="indefinite"
            />
        </path>
        </g>
    </svg>
    {/if}
    <image xlink:href="/spaceday/rocket.png" width="{SHIP_WIDTH}" height="{SHIP_HEIGHT}" x="{getShipX(x)}" y="{y}"/>
{/if}








