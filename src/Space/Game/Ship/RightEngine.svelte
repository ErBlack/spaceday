<script>
import { Controls } from '../Controls';
import { GameState } from '../GameState';
import {
    SHIP_WIDTH,
    FRICTION_ENGINE_WIDTH,
    FRICTION_ENGINE_HEIGHT,
} from '../constants';

const frX = FRICTION_ENGINE_WIDTH + SHIP_WIDTH - 8;
const frY = 0;

let {left} = Controls;

GameState.addEventListener('change:ship', ({value}) => left = Controls.left);

</script>
{#if left}
    <svg xmlns="http://www.w3.org/2000/svg" x={frX} y={frY} width="{FRICTION_ENGINE_WIDTH}" height="{FRICTION_ENGINE_HEIGHT}" viewBox="0 0 120 20">
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