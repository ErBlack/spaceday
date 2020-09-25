<script>
    import {SYSTEM_RADIUS_PX} from '../dimensions';
    export let x;
    export let y;
    export let begin;
</script>
<circle stroke-width="1px" fill="none" stroke="rgba(255,255,255,.35)" cx="{x}" cy={y} r="0" vector-effect="non-scaling-stroke">
    <animate attributeName="r" values="0; 8.5; 30; 50; 250; {SYSTEM_RADIUS_PX}; {SYSTEM_RADIUS_PX * 5}" keyTimes="0; 0.190; 0.377; 0.394; 0.565; 0.80; 1" dur="110s" begin="{begin}"/>
</circle>