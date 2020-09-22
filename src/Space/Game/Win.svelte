<script>
import ScaleFromMars from '../Animations/ScaleFromMars.svelte';
import { GameState } from './GameState';
import { final } from '../../ost';

let { landStatus } = GameState;

let winTimeout;
let isWin = false;

const win = () => {
    clearTimeout(winTimeout);
    winTimeout = setTimeout(() => {
        isWin = true;
    }, 300);
    final.play();
}

GameState.addEventListener('change:landStatus', ({value}) => {
    landStatus = value;

    if (value && value.success) {
        win();
    }
});
</script>
{#if isWin}
<ScaleFromMars/>
{/if}