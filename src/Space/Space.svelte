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

</script>
<style>
.space {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1);
}
</style>

<svg class="space" viewBox="0 0 5000 5000">
    <Sun/>
    <Mercury/>
    <Venus/>
    <Earth/>
    <Mars/>
    <Jupiter/>
    <Saturn/>
    <Uranus/>
    <Neptune/>
</svg>