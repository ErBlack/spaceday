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

import ScaleFromMars from './Animations/ScaleFromMars.svelte';
import TranslateFromMars from './Animations/TranslateFromMars.svelte';

import { SYSTEM_RADIUS_PX } from './dimensions.js';
</script>
<style>
.holder {
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
.space {
    transform: translate(-50%, -50%);
}

@media (orientation: portrait) {
    .space {
        height: 100vh;
    }
}
@media (orientation: landscape) {
    .space {
        width: 100vw;
    }
}
</style>

<div class="holder">
    <svg class="space" viewBox="0 0 {SYSTEM_RADIUS_PX * 2} {SYSTEM_RADIUS_PX * 2}">
        <g>
            <TranslateFromMars/>
            <g>
                <ScaleFromMars/>
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
</div>