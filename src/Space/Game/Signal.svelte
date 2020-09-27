<script>
    import Ping from './Ping.svelte';
    import {
        marsXToSpace,
        marsYToSpace,
    } from '../Mars/Mars';
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

    const t = [null,null,null,null,null,null,null,null];

    GameState.addEventListener('change:landStatus', ({value}) => {
        if (value && value.success) {
            x = marsXToSpace(value.x);
            y = marsYToSpace(value.y);

            t[0] = setTimeout(() => a = true, 7100);
            t[1] = setTimeout(() => b = true, 8100);
            t[2] = setTimeout(() => c = true, 8500);
            t[3] = setTimeout(() => d = true, 8900);

            t[4] = setTimeout(() => e = true, 17600);
            t[4] = setTimeout(() => f = true, 18600);
            t[6] = setTimeout(() => g = true, 19000);
            t[7] = setTimeout(() => h = true, 19400);
        } else {
            t.forEach(clearTimeout);
            a = b = c = d = e = f = g = h = false;
        }
    })
</script>
{#if a}
<svg class="space" x="{-SYSTEM_RADIUS_PX}" y="{-SYSTEM_RADIUS_PX}" width="{SYSTEM_RADIUS_PX * 2}" height="{SYSTEM_RADIUS_PX * 2}" viewBox="{-SYSTEM_RADIUS_PX} {-SYSTEM_RADIUS_PX} {SYSTEM_RADIUS_PX * 2} {SYSTEM_RADIUS_PX * 2}">
    <Ping x="{x}" y={y} begin="0s"/>
    {#if b}<Ping x="{x}" y={y} begin="1s"/>{/if}
    {#if c}<Ping x="{x}" y={y} begin="1.4s"/>{/if}
    {#if d}<Ping x="{x}" y={y} begin="1.8s"/>{/if}
    {#if e}<Ping x="{x}" y={y} begin="10.5s"/>{/if}
    {#if f}<Ping x="{x}" y={y} begin="11.5s"/>{/if}
    {#if g}<Ping x="{x}" y={y} begin="11.9s"/>{/if}
    {#if h}<Ping x="{x}" y={y} begin="12.3s"/>{/if}
</svg>
{/if}
