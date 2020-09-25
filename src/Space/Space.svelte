<script>
import Sun from './Sun.svelte';
import Mercury from './Mercury.svelte';
import Venus from './Venus.svelte';
import Earth from './Earth.svelte';
import { Mars } from './Mars';
import Jupiter from './Jupiter.svelte';
import Saturn from './Saturn.svelte';
import Uranus from './Uranus.svelte';
import Neptune from './Neptune.svelte';
import { Signal } from './Game';

import { SYSTEM_RADIUS_PX, mars } from './dimensions.js';
import encrypt from '../encrypt';
const getCode = () => {
    if (!localStorage.getItem('code')) {
        localStorage.setItem('code', encrypt(String(Date.now()).slice(0, -1)));
    }

    return localStorage.getItem('code');
};

import { GameState, finishGame } from './Game';
import { final } from '../ost';

let { landStatus } = GameState;

let winTimeout;
let isWin = false;

const win = () => {
    const code = getCode();
    clearTimeout(winTimeout);
    winTimeout = setTimeout(() => {
        isWin = true;
    }, 300);

    final.play();

    setTimeout(() => {
        prompt('Позравляю! Теперь пришли мне код, чтобы узнать, был ли ты первым', code);
        finishGame();
    }, 111000)
}

GameState.addEventListener('change:landStatus', ({value}) => {
    landStatus = value;

    if (value && value.success) {
        win();
    }
});

GameState.addEventListener('change:active', ({value}) => {
    if (value) isWin = false;
});
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

.system {
    transform: scale(3500);
}

.system_win {
    animation: zoom 110s cubic-bezier(0,1,0,1) forwards;
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

@keyframes zoom {
    0% {
        transform: scale(3500);
    }

    100% {
        transform: scale(1);
    }
}

</style>
<div class="container">
    <div class="center">
        <svg class="space" viewBox="{-SYSTEM_RADIUS_PX} {-SYSTEM_RADIUS_PX} {SYSTEM_RADIUS_PX * 2} {SYSTEM_RADIUS_PX * 2}">
            <g class="system{isWin ? ' system_win' : ''}" transform="scale({1})">
                <Sun/>
                <Mercury/>
                <Venus/>
                <Earth/>
                <Mars/>
                <Jupiter/>
                <Saturn/>
                <Uranus/>
                <Neptune/>
                <Signal/>
            </g>
        </svg>
    </div>
</div>