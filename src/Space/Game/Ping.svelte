<script>
    import {SYSTEM_RADIUS_PX} from '../dimensions';
    export let x;
    export let y;
    export let begin;
</script>
<circle stroke-width="1px" fill="none" stroke="rgba(255,255,255,.35)" cx="{x}" cy={y} r="0" vector-effect="non-scaling-stroke">
    <animate attributeName="r" values="0; 0.1; 10; 30; 150; {SYSTEM_RADIUS_PX}; {SYSTEM_RADIUS_PX * 2}" keyTimes="0; 0.1; 0.2938; 0.48; 0.67; 0.9; 1" dur="110s" begin="{begin}"/>
</circle>