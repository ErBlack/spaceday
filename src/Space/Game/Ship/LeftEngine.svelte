<script>
import {
    FRICTION_ENGINE_WIDTH,
    FRICTION_ENGINE_HEIGHT
} from '../constants';

const flX = 8;
const flY = 0;
</script>
<svg xmlns="http://www.w3.org/2000/svg" x={flX} y={flY} width="{FRICTION_ENGINE_WIDTH}" height="{FRICTION_ENGINE_HEIGHT}" viewBox="0 0 120 20">
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