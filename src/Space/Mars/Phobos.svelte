<script>
import Orbit from './Orbit.svelte';
const r = 120;
const d = r * 2;
</script>
<g>
    <Orbit duration="120" />
    <svg xmlns="http://www.w3.org/2000/svg" width="{d}" height="{d}" x="4500" y="8200">
        <radialGradient id="phobos-light" cx="68%" cy="32%">
            <stop offset="10%" stop-color="#d0d0d0"/>
            <stop offset="85%" stop-color="rgba(160,160,160,.8)"/>
            <stop offset="100%" stop-color="rgba(160,160,160,.0)"/>
        </radialGradient>
        <circle cx={r} cy={r} r={r} fill="#9f9f9f"/>
        <circle class="light" cx="{r}" cy="{r}" r="{r}" fill="url(#phobos-light)"/>
        <circle cx="50" cy="80" r="12" fill="#909090"/>
        <circle cx="140" cy="75" r="22" fill="#b0b0b0"/>
        <circle cx="80" cy="180" r="18" fill="#909090"/>
        <circle cx="165" cy="165" r="14" fill="#909090"/>
        <path d="m26.56161,45.51906c0.73186,-2.69439 1.76727,-6.74193 0.62474,-10.1177l22.91243,-20.28489c3.92274,2.18573 8.14363,1.96824 11.23389,0.90765l-34.77106,29.49494z" fill="#9f9f9f"/>
        <path d="m83.4085,233.85945c-3.30646,-0.20921 -7.51393,0.4075 -9.46886,2.82625l-20.89231,-10.75589c0.69452,-2.64673 0.56313,-5.36855 -1.82081,-8.16545l32.18198,16.09509z" fill="#9f9f9f"/>
        <path d="m233.31508,81.04334c0.46655,-2.70578 1.55255,-4.56685 3.08905,-6.25899l-6.22577,-14.73538c-1.90996,0.4599 -5.0948,0.0704 -7.50064,-1.19509l10.63736,22.18946z" fill="#b1b1b1"/>
    </svg>
</g>