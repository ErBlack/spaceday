<script>
import Orbit from './Orbit.svelte';
const r = 80;
const d = r * 2;
</script>
<g>
    <Orbit duration="200" />
    <svg xmlns="http://www.w3.org/2000/svg" width="{d}" height="{d}" x="4500" y="8840">
        <radialGradient id="deimos-light" cx="68%" cy="32%">
            <stop offset="10%" stop-color="#dfd3bd"/>
            <stop offset="85%" stop-color="rgba(214,199,166,.8)"/>
            <stop offset="100%" stop-color="rgba(214,199,166,.0)"/>
        </radialGradient>
        <circle cx={r} cy={r} r={r} fill="#bda082"/>
        <circle cx="48.64844" cy="117.00781" r="13.78125" fill="#a78b6f"/>
        <circle class="light" cx="{r}" cy="{r}" r="{r}" fill="url(#deimos-light)"/>
        <circle fill="#b6b498" r="9.66797" cy="26.19921" cx="80.13086"/>
        <circle fill="#b6b498" r="9.66797" cy="95.18164" cx="124.44922"/>
        <path d="m8.79038,116.11142c0.70731,4.24463 0.49136,9.32354 -1.90483,12.9675l14.43851,16.68548c4.9389,-1.0345 9.97792,-0.56731 15.41739,0.8009l-27.95107,-30.45388z" fill="#bda082"/>
        <path fill="#d8c9ad"d="m118.1978,10.27889c4.36976,0.20155 7.87987,-1.62517 10.06695,-3.73748l16.26492,12.93945c-1.34875,4.01509 -2.82506,6.6055 -1.64978,10.91036l-24.68209,-20.11233z"/>
        <path d="m9.22211,43.62966c0.09829,-2.5109 -0.59181,-5.0218 -2.57712,-6.51905l5.96924,-9.12279c2.02729,0.86347 4.50508,1.22012 6.92656,0.22525l-10.31868,15.41659z" fill="#bda082"/>
    </svg>
</g>