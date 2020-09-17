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
import { FROM_MARS, MARS_SCALE_FACTOR } from './Animations/animations.js';

import { SYSTEM_RADIUS_PX, mars } from './dimensions.js';
</script>
<style>
.container {
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.center {
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
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
<div class="container">
    <div class="center">
        <svg class="space" viewBox="{-SYSTEM_RADIUS_PX} {-SYSTEM_RADIUS_PX} {SYSTEM_RADIUS_PX * 2} {SYSTEM_RADIUS_PX * 2}">
            <g transform="scale(3500)">
            <!-- <ScaleFromMars/> -->
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
        </svg>
    </div>
</div>