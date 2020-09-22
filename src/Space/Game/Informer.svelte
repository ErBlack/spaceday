<script>
    import { GameState } from './';

    let {
        active,
        ship: {
            y,
            hSpeed,
            vSpeed,
            alt,
            boost,
            fuel
        },
        landStatus
    } = GameState;

    const displaySpeed = (value) => (value >= 0 ? ' ' : '') + (value * 4).toFixed(2) + ' m/s';
    const displayAlt = (value) => (value * 2).toFixed(2) + 'm';
    const displayPercents = (value) => `${Math.round(value)}%`;

    GameState.addEventListener('change:active', ({value}) => active = value);
    GameState.addEventListener('change:landStatus', ({value}) => landStatus = value);

    GameState.addEventListener('change:ship', ({value}) => {
        hSpeed = value.hSpeed;
        vSpeed = value.vSpeed;
        alt = value.alt;
        boost = value.boost;
        fuel = value.fuel;
    });
</script>
<style>
pre {
    position: absolute;
    transform: translateX(-100%);
    left: 0;
    top: 0;
    z-index: 11;
    font-family: 'VT323' monospace;
    color: #fff;
    padding: 1em;
    margin: 0;
    animation: in .3s ease-out 1s forwards;
    user-select: none;
}

@keyframes in {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
{#if active && !landStatus}
<pre>
H. SPEED  {displaySpeed(Math.abs(hSpeed))}
V. SPEED  {displaySpeed(-vSpeed)}
ALTITUDE   {displayAlt(alt)}
BOOST      {displayPercents(boost)}
FUEL       {displayPercents(fuel)}
</pre>
{/if}