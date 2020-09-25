<script>
    import Ping from './Ping.svelte';
    import {
        marsXToSpace,
        marsYToSpace,
    } from '../Mars';
    import {SYSTEM_RADIUS_PX} from '../dimensions';
    import {GameState} from './GameState';

    let x;
    let y;
    let a = false;
    let b = false;
    let c = false;
    let d = false;
    
    let e = false;
    let f = false;
    let g = false;
    let h = false;

    GameState.addEventListener('change:landStatus', ({value}) => {
        if (value) {
            x = marsXToSpace(value.x);
            y = marsYToSpace(value.y);
        }

        setTimeout(() => a = true, 7100);
        setTimeout(() => b = true, 8100);
        setTimeout(() => c = true, 8500);
        setTimeout(() => d = true, 8900);

        setTimeout(() => e = true, 17600);
        setTimeout(() => f = true, 18600);
        setTimeout(() => g = true, 19000);
        setTimeout(() => h = true, 19400);
    })
</script>
{#if a}<Ping x="{x}" y={y} begin="0s"/>{/if}
{#if b}<Ping x="{x}" y={y} begin="1s"/>{/if}
{#if c}<Ping x="{x}" y={y} begin="1.4s"/>{/if}
{#if d}<Ping x="{x}" y={y} begin="1.8s"/>{/if}
{#if e}<Ping x="{x}" y={y} begin="10.5s"/>{/if}
{#if f}<Ping x="{x}" y={y} begin="11.5s"/>{/if}
{#if g}<Ping x="{x}" y={y} begin="11.9s"/>{/if}
{#if h}<Ping x="{x}" y={y} begin="12.3s"/>{/if}

