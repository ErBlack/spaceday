<script>
import Sun from './Sun.svelte';
import Mercury from './Mercury.svelte';
import Venus from './Venus.svelte';
import Earth from './Earth.svelte';
import Mars from './Mars.svelte';
import Jupiter from './Jupiter.svelte';
import Saturn from './Saturn.svelte';
import Uranus from './Uranus.svelte';
import Neptune from './Neptune.svelte';

const z = (scale, x, y) => `${scale},0,0,${scale},${-(scale - 1) * x},${-(scale - 1) * y}`;


const values = [1000, 1];
const x = 1413;
const y = 2485;
const translate = scale => scale === 1 ? '0,0' : `${-(scale - 1) * x},${-(scale - 1) * y}`;
const keySplines = '0 .7 0 1';
const duration = '100s';

const valuesTranslate = values.map(translate);
</script>
<style>
.space {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
}

@media (orientation: portrait) {
    .space {
        width: auto;
        height: 100%;
    }
}
</style>

<svg class="space" viewBox="0 0 5000 5000">
    <g>
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="{duration}"
            calcMode="spline"
            keySplines="{keySplines}"
            values="{valuesTranslate.join(';')}"
            repeatCount="indefinite"
        />
        <g>
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                dur="{duration}"
                calcMode="spline"
                keySplines="{keySplines}"
                values="{values.join(';')}"
                repeatCount="indefinite"
            />
            <Sun/>
            <Mercury/>
            <Venus/>
            <Earth/>
            <Mars/>
            <Jupiter/>
            <Saturn/>
            <Uranus/>
            <Neptune/>
        </g>
    </g>
</svg>